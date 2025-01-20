import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PostListCardComponent } from "./post-list-card.component";

describe("PostListCardComponent", () => {
  let component: PostListCardComponent;
  let fixture: ComponentFixture<PostListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
