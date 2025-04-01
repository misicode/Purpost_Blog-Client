import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Subject, switchMap, takeUntil } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { AuthService } from "../../../core/services/auth/auth.service";
import { UserService } from "../../../core/services/user/user.service";

@Component({
  selector: "app-user-profile",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: "./user-profile.component.html",
  styleUrl: "./user-profile.component.scss",
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private toastrService = inject(ToastrService);
  private userService = inject(UserService);
  private originalProfileForm: any;
  private destroy$ = new Subject<void>();
  
  public profileForm: FormGroup = this.formBuilder.group({
    names: [{ value: "", disabled: true }, [Validators.required]],
    surnames: [{ value: "", disabled: true }, [Validators.required]],
    email: [{ value: "", disabled: true }, [Validators.required, Validators.email]],
  });
  public editable: boolean = false;

  ngOnInit(): void {
    this.getProfile();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getProfile() {
    this.authService.authUser.pipe(
      switchMap(username => this.userService.getProfile(username)),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => {
        this.profileForm.patchValue(res);
        this.originalProfileForm = this.profileForm.getRawValue();
      }
    });
  }

  editProfile() {
    this.authService.authUser.pipe(
      switchMap(username => this.userService.editProfile({ ...this.profileForm.value, username })),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => {
        this.toastrService.success("Su perfil se actualizó exitosamente");
        this.offEditable(res);
      }
    });
  }

  onEditable() {
    this.editable = true;
    this.profileForm.get("names")?.enable();
    this.profileForm.get("surnames")?.enable();
  }

  offEditable(form: any = this.originalProfileForm) {
    this.editable = false;
    this.profileForm.patchValue(form);
    this.profileForm.get("names")?.disable();
    this.profileForm.get("surnames")?.disable();
  }
}
