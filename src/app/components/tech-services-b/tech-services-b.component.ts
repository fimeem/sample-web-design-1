import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tech-services-b',
  templateUrl: './tech-services-b.component.html',
  styles: [
  ]
})
export class TechServicesBComponent implements OnInit {

  @Input() image : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
