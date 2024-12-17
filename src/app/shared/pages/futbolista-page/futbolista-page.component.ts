import {Component} from '@angular/core';
import {Futbolista} from '../../../futbolista/interface/futbolista';
import {FutbolistaService} from '../../../futbolista/services/futbolista.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-futbolista-page',
  templateUrl: './futbolista-page.component.html',
  styles: ``
})
export class FutbolistaPageComponent {
  futbolistas: Futbolista[] = [];

  paginador: any;

  constructor(private futbolistaService: FutbolistaService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page')!;
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


  public inDelete(id: number): void {
    // Mostrar ventana de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar al futbolista con el id ${id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamar al servicio si se confirma
        this.futbolistaService.eliminarFutbolistaPorID(id).subscribe((response) => {
          // Actualizar la lista local
          this.futbolistas = this.futbolistas.filter(cliente => cliente.id !== id);

          // Mostrar mensaje de éxito
          Swal.fire(
            '¡Eliminado!',
            'El futbolista ha sido eliminado con éxito.',
            'success'
          );
        }, (error) => {
          // Manejar errores
          Swal.fire(
            'Error',
            'Hubo un problema al eliminar el futbolista.',
            'error'
          );
        });
      }
    });
  }



}
