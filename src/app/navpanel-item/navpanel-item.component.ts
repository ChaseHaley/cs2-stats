import { Component, Input } from '@angular/core';

export interface NavpanelItemModel {
  title: string
}

@Component({
  selector: 'app-navpanel-item',
  templateUrl: './navpanel-item.component.html',
  styleUrls: ['./navpanel-item.component.scss']
})
export class NavpanelItemComponent {
  @Input() name?: string;

  constructor() { }
}
