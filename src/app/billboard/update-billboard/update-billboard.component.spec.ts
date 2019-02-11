import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBillboardComponent } from './update-billboard.component';

describe('UpdateBillboardComponent', () => {
  let component: UpdateBillboardComponent;
  let fixture: ComponentFixture<UpdateBillboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBillboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
