import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Futbolista} from '../../interface/futbolista';



@Component({
  selector: 'app-futbolista-list',
  templateUrl: './futbolista-list.component.html',
  styles: ``
})
export class FutbolistaListComponent {

  constructor() {}

  @Input()
  public futbolistas: Futbolista[] = [];


  @Output()
  public inDelete: EventEmitter<number> = new EventEmitter();


  public deleteById(id: number) {
    this.inDelete.emit(id);
    console.log("delete " + id);
  }


}
