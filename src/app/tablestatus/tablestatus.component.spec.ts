import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablestatusComponent } from './tablestatus.component';

describe('TablestatusComponent', () => {
  let component: TablestatusComponent;
  let fixture: ComponentFixture<TablestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablestatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
