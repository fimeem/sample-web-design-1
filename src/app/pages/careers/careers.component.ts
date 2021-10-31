import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styles: [
  ]
})
export class CareersComponent implements OnInit {

  CareerList: any=[];

  constructor(private sharedService: SharedService) { }

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
