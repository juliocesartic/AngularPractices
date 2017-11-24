import { LugaresService } from './../services/lugares.services';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class CrearComponent {
  lugar : any = {};

  constructor(private lugaresService : LugaresService){

  }


  guardarLugar(){
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion).subscribe((result)=>{
      this.lugar.lat = result.json().results[0].geometry.location.lat;
      this.lugar.lng = result.json().results[0].geometry.location.lng;
      this.lugar.id = Date.now();
      this.lugaresService.guardarLugar(this.lugar);
      alert('Negocio Guardado con exito');
      this.lugar = {};
    });

  }
}
