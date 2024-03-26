# Roteamento

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## COMANDOS PARA CRIAR VIA TERMINAL
"Destravar o powershell, ir em modo administrador":
Set-ExecutionPolicy Unrestricted e pressione Enter e depois digite "S" para confirmar.

Para reativar :
Agora se você quiser retorna a política para Restrita, digite o seguinte comando Set-ExecutionPolicy Restricted e pressione Enter e confirme novamente Com Sim “S” .


Instalar o Router do Angular....
npm i @angular/router


Criar o modulo app-routing....
ng generate module app-routing --flat true --module=app  

Criar o componente 
ng generate component primeira-pagina 

Abrir o 
ng serve --open  

Modulo para lazy-loading   rota lazy-loading e modulo principal app.module
ng g module lazy-loading --route=lazy-loading --module=app.module 

Para CRIAR UM GUARD de ROUTER ... acesso protegido: 
ng g guard auth

** Lembrar de adicionar o FormsModule no APP.MODULE.TS no IMPORT para poder usar o ngModel

Criar um SERVICE de autenticacao para saber quando esta logado 
 ng g service auth 

