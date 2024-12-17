import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Futbolista} from '../interface/futbolista';

@Injectable({
  providedIn: 'root'
})
export class FutbolistaService {

  private urlEndPoind: string = "http://localhost:8080/api/futbolistas"

  // public futbolista!:Futbolista;

  constructor(private http: HttpClient) { }

  /*con  @PathVariable
  @http://localhost:8080/api/futbolistas/page/0*/
  listarFutbolistas(page: number): Observable<any> {
    return this.http.get(`${this.urlEndPoind}/page/${page}`)
  }

  /*con  @PathParam
 @http://localhost:8080/api/futbolistas/page?page=0*/
  /*listarFutbolistas(page: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
    console.log(params)
    return this.http.get(`${this.urlEndPoind}/page`, {params})
  }*/




  listarFutbolistaPorID(id: number): Observable<Futbolista> {
    const params:HttpParams = new HttpParams()
      .set('id', id)
    return this.http.get<Futbolista>(`${this.urlEndPoind}/${id}`, {params})
  }


  eliminarFutbolistaPorID(id: number): Observable<void> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.delete<void>(`${this.urlEndPoind}/eliminar/${id}`, {params})
  }
}
