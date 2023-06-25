import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakePage } from './make.page';

describe('MakePage', () => {
  let component: MakePage;
  let fixture: ComponentFixture<MakePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
