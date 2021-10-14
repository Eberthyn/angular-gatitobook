import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(`${API}/user/signup`, novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`${API}/user/exists/${nomeUsuario}`)
  }

}
