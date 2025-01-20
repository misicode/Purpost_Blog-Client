import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserPostFormComponent } from "./user-post-form.component";

describe("UserPostFormComponent", () => {
  let component: UserPostFormComponent;
  let fixture: ComponentFixture<UserPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPostFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
