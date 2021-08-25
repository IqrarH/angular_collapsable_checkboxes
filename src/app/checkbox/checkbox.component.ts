import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  num : Number  = -1; 
  show: Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  assign(number: Number){
    if(this.num === number){
      this.show = !this.show
    }else{
      this.show = true;
    }
    this.num=number;
  }

}
