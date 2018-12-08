import { Component } from '@angular/core';

//componenetes
import { ToastController, Platform } from "ionic-angular";

//plugins
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Cordova } from '@ionic-native/core';

// Providers
import { HistorialProvider } from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(  private barcodeScanner:BarcodeScanner,
                private toastCtrl:ToastController,
                private platform:Platform,
                private _historialProvider:HistorialProvider) {

  }

  scan(){
    console.log("Realizando scan....")

    if( !this.platform.is('cordova')){
      // this._historialProvider.agregar_historial("http://google.com");
      this._historialProvider.agregar_historial("geo:21.469901913358374,-104.85574379404909");
      return;

    }

    this.barcodeScanner.scan().then( (barcodeData) =>{
      // console.log( "Data del scan", barcodeData);
      console.log( "result:", barcodeData.text);
      console.log( "format:", barcodeData.format);
      console.log( "cancelled:", barcodeData.cancelled);
      if (barcodeData.cancelled == false && barcodeData.text !=null){
        this._historialProvider.agregar_historial(barcodeData.text);
      }
    }, (err) =>{
      console.error("Error", err);
      this.mostrar_error("Error: " + err);
    });
  }


  mostrar_error( mensaje:string){
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 1500
      });

      toast.present()

  }

}
