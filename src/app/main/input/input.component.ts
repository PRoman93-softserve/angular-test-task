import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  value: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() valueEvent = new EventEmitter<string>();

  sendValue(e: Event) {
    this.value = (e.currentTarget as HTMLInputElement).value;
    this.valueEvent.emit(this.value);
  }
}
