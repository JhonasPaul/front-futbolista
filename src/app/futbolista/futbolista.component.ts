import {Component} from '@angular/core';
import {Futbolista} from "./futbolista";
import {FutbolistaService} from "./futbolista.service";
import {ActivatedRoute} from "@angular/router";
import {ModalService} from "./detalle/modal.service";

@Component({
  selector: 'app-futbolista',
  templateUrl: './futbolista.component.html',
  styleUrl: './futbolista.component.css'
})
export class FutbolistaComponent {
  futbolistas: Futbolista[];
  paginador: any;
  futbolistaSeleccionado:Futbolista;


  constructor(private futbolistaService: FutbolistaService,
              private acticatedRoute: ActivatedRoute,
              public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.acticatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if (!page) {
        page = 0
      }
      this.futbolistaService.listarFutbolistas(page)
        .subscribe(response => {
          this.futbolistas = response.content as Futbolista[];
          this.paginador = response;
        });
    });
  }

  abrirModal(futbolista:Futbolista){
    this.futbolistaSeleccionado = futbolista
    this.modalService.abrirModal();
  }
}
