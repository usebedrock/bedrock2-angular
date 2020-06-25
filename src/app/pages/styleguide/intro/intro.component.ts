import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './intro.component.html',
  styles: [
    '.intro { height: 100%; display: flex; align-items: center; }'
  ]
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
