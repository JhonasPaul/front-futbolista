import {Component, Input} from '@angular/core';
import {FutbolistaService} from '../../services/futbolista.service';
import {Futbolista} from '../../interface/futbolista';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-futbolista-detalle',
  templateUrl: './futbolista-detalle.component.html',
  styles: ``
})
export class FutbolistaDetalleComponent {

  private futbolista!: Futbolista;

  get _futbolista(): Futbolista {
    return this.futbolista;
  }

  constructor(private futbolistaService: FutbolistaService,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    // Captura el parámetro 'id' de la ruta
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.detail(id);
    }
  }

  public detail(id: number) {
    this.futbolistaService.listarFutbolistaPorID(id).subscribe(
      (respose: Futbolista) => {
        this.futbolista = respose;
      }
    )
  }

}
