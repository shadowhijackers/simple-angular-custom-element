import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';

  @Input()
  set items(value) {
    this._items = JSON.parse(value);
  }

  get items() {
    return this._items;
  }

  private _items: any = [];

  @Output() action = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  btnHandler() {
    this.action.emit('Another option going to be added check the select menu');
  }

}
