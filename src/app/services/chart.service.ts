import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ChartService {

  constructor() { }

  update = true;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  updateChart() {
  	this.change.emit(this.update);
  }


}
