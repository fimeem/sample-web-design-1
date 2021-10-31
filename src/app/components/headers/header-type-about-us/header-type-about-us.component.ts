import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-type-about-us',
  templateUrl: './header-type-about-us.component.html',
  styles: [
  ]
})
export class HeaderTypeAboutUsComponent implements OnInit {

  @Input() image : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
