import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../../../core/services/user.service";

import { UserProfile } from "../../../core/interfaces/user.interface";

@Component({
  selector: "user-profile-page",
  templateUrl: "./profile-page.component.html",
})
export class ProfilePageComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  
  public profileForm: FormGroup = this.formBuilder.group({
    names: [{ value: "", disabled: true }, [Validators.required]],
    surnames: [{ value: "", disabled: true }, [Validators.required]],
    email: [{ value: "", disabled: true }, [Validators.required, Validators.email]],
  });
  public editable: boolean = false;
  public user?: UserProfile;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getProfile()
      .subscribe({
        next: (res) => {
          this.profileForm.patchValue(res);
        }
      });
  }

  onEditable() {
    this.editable = true;
    this.profileForm.get("names")?.enable();
    this.profileForm.get("surnames")?.enable();
  }

  offEditable() {
    this.editable = false;
    this.profileForm.get("names")?.disable();
    this.profileForm.get("surnames")?.disable();
  }
}
