import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-type-a',
  templateUrl: './header-type-a.component.html',
  styles: [
  ]
})
export class HeaderTypeAComponent implements OnInit {

  @Input() image : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
