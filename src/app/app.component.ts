import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  cl4= 'proper-class';
  username= "Gulzar Ahmad";

  my_method(){
    alert("Hi Naseem")
  }
}
