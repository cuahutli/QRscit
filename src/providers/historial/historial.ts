// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { InAppBrowser } from "@ionic-native/in-app-browser";
import { ScanData } from "../../models/scan-data.model";

/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {

  private _historial:ScanData[] = [];

  constructor(  private iab:InAppBrowser) {
    console.log('Hello HistorialProvider Provider');
  }


  agregar_historial( texto:string ){
    let data = new ScanData(texto);
    this._historial.unshift(data);
    console.log(this._historial);
    this.abrir_scan(0);
  }

  cargar_historial(){
    return this._historial
  }

  abrir_scan(index:number){
    let scanData = this._historial[index];


    switch( scanData.tipo ){
      case "http" :
        this.iab.create(scanData.info ,"_system");
      default:
        console.error("tipo no soportado")
    }
  }

}
