import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-careers',
  templateUrl: './show-careers.component.html',
  styles: [
  ]
})
export class ShowCareersComponent implements OnInit {

  CareerList: any=[];
  @Input() ref: string = '';
  @Input() title: string = '';
  @Output() confirm = new EventEmitter<any>();
  @Output() decline = new EventEmitter<any>();

  constructor(private sharedService: SharedService) { }
  
  onConfirm(): void {}

  onDecline(): void {}

  ngOnInit(): void {
    this.fetchCareer();
  }

  fetchCareer() {
    return this.sharedService.getCareerList().subscribe((data: {}) => {
      this.CareerList = data;
      console.info(this.CareerList)
    },
    error => console.log(error)
    );    
  } 

}
