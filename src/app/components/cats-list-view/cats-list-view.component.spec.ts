import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsListViewComponent } from './cats-list-view.component';

describe('CatsListViewComponent', () => {
  let component: CatsListViewComponent;
  let fixture: ComponentFixture<CatsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatsListViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CatsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
