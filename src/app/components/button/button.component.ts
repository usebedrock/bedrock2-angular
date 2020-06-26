import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() skin?: string = 'default';
  @Input() layout?: string;
  @Input() icon?: string;

  getClass(layout){
    var classList='';
    if(layout == "icon-only"){
       classList = 'c-button--icon';
    }else if (layout == "icon-right"){
        classList = 'c-button--icon-right';
    }else {
        classList = '';
    }
    return classList;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
