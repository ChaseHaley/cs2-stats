import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpanelComponent } from './navpanel.component';

describe('NavpanelComponent', () => {
  let component: NavpanelComponent;
  let fixture: ComponentFixture<NavpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavpanelComponent]
    });
    fixture = TestBed.createComponent(NavpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
