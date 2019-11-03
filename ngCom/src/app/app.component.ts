import { Component, ViewChild  } from '@angular/core';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // interpolation TS->HTML
  title = 'JackMobile';
  time1 = 0;
  version = 0;
  isProduct = false;
  account = {username:"admin",password:"123"};
  // interpolation TS->HTML

  // Viewchild
  @ViewChild("com1",{static:false}) com1:Com1Component
  @ViewChild("com2",{static:false}) com2:Com2Component
  // Viewchild

  constructor(public shared:SharedService){

  }

  getResult(){
    return "Jack";
  }

  onClick(){
    this.version++;
  }

  onChange1(event){
    this.time1 = event;
  }

  onResetVersion(){
    this.version = 0;
  }

  onClickViewChild(){
    this.com1.count = 10;
    this.com1.change.emit(1000)
    this.com2.reset.emit()
  }

}
