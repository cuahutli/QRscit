import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { HistorialProvider } from "../../providers/historial/historial";
import { ScanData } from '../../models/scan-data.model';

/**
 * Generated class for the GuardadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {
  historial:ScanData[]=[];

  constructor(private _historialProvider:HistorialProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuardadosPage');
    this.historial = this._historialProvider.cargar_historial();
  }

  abrir_scan(index:number){
    this._historialProvider.abrir_scan(index);

  }

}
