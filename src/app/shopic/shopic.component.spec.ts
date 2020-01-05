import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopicComponent } from './shopic.component';

describe('ShopicComponent', () => {
  let component: ShopicComponent;
  let fixture: ComponentFixture<ShopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
