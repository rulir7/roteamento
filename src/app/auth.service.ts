import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //numa aplicacao real o token seria armazenado na base de dados e seria requisitado ao servidor
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  constructor() { }

  estaAutenticado(): boolean {
    // localStorage ou sessionStorage  para salvar a informacao...
    return !!sessionStorage.getItem("acess-token"); //acess-token foi o nome dado quando criado o TOKEN.... 

  }

  login(email: string, senha: string): boolean {
    if (email === "admin@admin.com.br" && senha === "123456") {
      sessionStorage.setItem("acess-token", this.accessToken);
      return true;
    }
    //quando nao tiver login/senha correto
    return false;
  }

  //deslogar e limpar o token no storage
  logout() {
    sessionStorage.clear();
  }
}
