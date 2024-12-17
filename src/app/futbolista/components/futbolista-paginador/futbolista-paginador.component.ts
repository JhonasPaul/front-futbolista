import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-futbolista-paginador',
  templateUrl: './futbolista-paginador.component.html',
  styles: ``
})
export class FutbolistaPaginadorComponent {

  @Input()
  public paginador: any

  public paginas: number[] = []
  public desde: number = 0;
  public hasta: number = 0;


  ngOnInit(): void {
    this.initPaginator();
  }

  ngOnChanges(changes: SimpleChanges) {
    let paginadoirActualizado = changes['paginador'];
    if (paginadoirActualizado.previousValue) {
      this.initPaginator();
    }
  }

  private initPaginator(): void {
    this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
    this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);

    if (this.paginador.totalPages > 5) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde)
    } else {
      this.paginas = new Array(this.paginador.totalPages).fill(0).map((_valor, indice) => indice + 1)
    }
  }
}
