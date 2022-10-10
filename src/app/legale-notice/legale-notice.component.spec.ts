import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegaleNoticeComponent } from './legale-notice.component';

describe('LegaleNoticeComponent', () => {
  let component: LegaleNoticeComponent;
  let fixture: ComponentFixture<LegaleNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegaleNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegaleNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
