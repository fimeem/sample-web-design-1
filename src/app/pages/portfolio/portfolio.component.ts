import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ProjectList: any = [];

  ngOnInit(): void {
    this.refreshProjectList();
  }

  refreshProjectList(){
    this.sharedService.getProjectList().subscribe(data=>{
      this.ProjectList = data;
      console.info(this.ProjectList)
    })
  }


}
