import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  status=false;
  list=[];
  
  
  do(){
    this.status=!this.status;
    
    this.list.push(new Date());
  
   
    

  }
 
}
