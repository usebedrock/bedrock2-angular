import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-toolbar-group',
  templateUrl: './group.component.html',
})
export class GroupComponent implements OnInit {
  @Input() position?: string = 'left';
  constructor() { }

  ngOnInit(): void {
  }

}
