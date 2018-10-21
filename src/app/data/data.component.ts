import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public text = '';

  constructor() { }

  get shortText() {
    return this.text.substr(0, 3);
  }

  @Output()
  selectedItem = new EventEmitter();

  selectItem() {
    this.selectedItem.emit(this.text);
  }

  ngOnInit() {
  }

}
