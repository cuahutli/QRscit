import { Component } from '@angular/core';

//componenetes
import { ToastController, Platform } from "ionic-angular";

//plugins
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Cordova } from '@ionic-native/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(  private barcodeScanner:BarcodeScanner,
                private toastCtrl:ToastController,
                private platform:Platform) {

  }

  scan(){
    console.log("Realizando scan....")

    if( !this.platform.is('cordova')){
      return;

    }

    this.barcodeScanner.scan().then( (barcodeData) =>{
      // console.log( "Data del scan", barcodeData);
      console.log( "result:", barcodeData.text);
      console.log( "format:", barcodeData.format);
      console.log( "cancelled:", barcodeData.cancelled);
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
