import { Component, OnInit, ViewChild } from '@angular/core';
import { EllipsisDirective } from 'ngx-ellipsis';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styles: [
  ]
})
export class UpdatesComponent implements OnInit {
  showMoreButton: boolean | undefined;
  showMore: boolean | undefined;
  cd: any;

  constructor(private sharedService: SharedService) { }

  //BlogList1: any=[];
  BlogList: any=[];

  ngOnInit(): void {
    //this.refreshBlogList();
    this.fetchBlog();

    //this.BlogList1 = this.sharedService.getMassage()
  }

  fetchBlog() {
    return this.sharedService.getBlogList().subscribe((data: {}) => {
      this.BlogList = data;
      console.info(this.BlogList)
    })
  }

  truncated(index: number) {
    this.showMoreButton = index === null;
  }

  @ViewChild(EllipsisDirective) ellipsisRef: EllipsisDirective | undefined;

  showComplete() {
    if (this.ellipsisRef) {
      this.showMore = true;
      this.cd.detectChanges();
      this.ellipsisRef.applyEllipsis();
    }
  }

}
