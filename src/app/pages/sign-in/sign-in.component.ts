import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
  '.l-sign-in-container-wrapper { height: 100%; display: flex; align-items: center; }',
  '.l-sign-in-container { max-width: 40rem; margin: 0 auto;}'
  ]
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
