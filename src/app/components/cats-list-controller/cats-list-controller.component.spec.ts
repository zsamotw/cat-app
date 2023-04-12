import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsListControllerComponent } from './cats-list-controller.component';

describe('CatsListControllerComponent', () => {
  let component: CatsListControllerComponent;
  let fixture: ComponentFixture<CatsListControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsListControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsListControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
