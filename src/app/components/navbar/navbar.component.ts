import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  bgColor = 'blur';

  navigationList = [
    {path: 'home', label: 'Home' },
    {path: 'about', label: 'About'},
    {path: 'career', label: 'Careers'},
    // {path: 'contact', label: 'Contact'},
    {path: null, label: 'Corporations', children: [
    {path: 'event/solution', label: 'Canvas Event Solution'},
    {path: 'exim', label: 'Canvas Exim'},
    {path: 'technology', label: 'Canvas Technologies'},
    {path: 'trad', label: 'Canvas Trading Corporation'},
  ]},
  {path: 'portfolio', label: 'Portfolio'},
  // {path: 'update', label: 'Updates'},
  ];


  isScrollDown = true;

  @HostListener('window:scroll', ['$event'])
  windowScrolled(event: any){
    console.info(window.scrollY);
    if (window.scrollY > 240){
      this.bgColor = 'blur';
    }else{
      this.bgColor = 'blur';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public scrollDown() {
    this.isScrollDown = false;
    return  this.isScrollDown;
  }

}
