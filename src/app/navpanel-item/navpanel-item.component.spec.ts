import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpanelItemComponent } from './navpanel-item.component';

describe('NavpanelItemComponent', () => {
  let component: NavpanelItemComponent;
  let fixture: ComponentFixture<NavpanelItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavpanelItemComponent]
    });
    fixture = TestBed.createComponent(NavpanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
