import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-type-f',
  templateUrl: './header-type-f.component.html',
  styles: [
  ]
})
export class HeaderTypeFComponent implements OnInit {

  @Input() image : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
