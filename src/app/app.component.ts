import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'canvas-web';

  themeBrightness = 'light';

  ngAfterViewInit(){
    document.body.classList.add(this.themeBrightness);
  }
}
