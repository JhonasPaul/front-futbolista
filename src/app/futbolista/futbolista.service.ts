import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Futbolista} from "./futbolista";

@Injectable({
  providedIn: 'root'
})
export class FutbolistaService {
  private urlEndPoind: string = "http://localhost:8080/api/futbolistas"


  constructor(private http: HttpClient,
              ) {
  }

  listarFutbolistas(page: number): Observable<any> {
    return this.http.get(this.urlEndPoind + '/page/' + page);
  }

  obtenerFutbolistaPorId(id: number): Observable<Futbolista> {
    return this.http.get<Futbolista>(`${this.urlEndPoind}/${id}`)
  }
}
