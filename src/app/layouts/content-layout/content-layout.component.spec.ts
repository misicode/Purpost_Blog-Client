import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContentLayoutComponent } from "./content-layout.component";

describe("ContentLayoutComponent", () => {
  let component: ContentLayoutComponent;
  let fixture: ComponentFixture<ContentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
