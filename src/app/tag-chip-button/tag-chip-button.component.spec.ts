import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagChipButtonComponent } from './tag-chip-button.component';

describe('TagChipButtonComponent', () => {
  let component: TagChipButtonComponent;
  let fixture: ComponentFixture<TagChipButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagChipButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagChipButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
