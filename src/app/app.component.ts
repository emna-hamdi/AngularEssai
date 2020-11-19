import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applicationAngular';
  bgColor="yellow";
  show:Boolean =false;
  changeStatus(){
    this.show = !this.show;
  }

}
