import {Component, Input} from '@angular/core';
import {Futbolista} from "../futbolista";
import {FutbolistaService} from "../futbolista.service";
import {ModalService} from "./modal.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'detalle-futbolista',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() public futbolista: Futbolista

  constructor(private futbolistaService: FutbolistaService,
              public modalService: ModalService,
              private acticatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.acticatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get('id')!;
      if (id) {
        this.futbolistaService.obtenerFutbolistaPorId(id).subscribe(futbolista => {
          this.futbolista = futbolista;
        });
      }
    });
  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }
}
