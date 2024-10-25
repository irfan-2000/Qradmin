import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDishesComponent } from './menu-dishes.component';

describe('MenuDishesComponent', () => {
  let component: MenuDishesComponent;
  let fixture: ComponentFixture<MenuDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuDishesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
