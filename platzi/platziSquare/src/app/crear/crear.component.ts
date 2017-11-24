import { LugaresService } from './../services/lugares.services';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar : any = {};
  id:any = null;

  constructor(private lugaresService : LugaresService, private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id'];

    if(this.id != 'new'){
      this.lugaresService.getLugar(this.id).valueChanges().subscribe((lugar)=>{
                                this.lugar = lugar;
                          });
     }


  }


  guardarLugar(){
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion).subscribe((result)=>{
      this.lugar.lat = result.json().results[0].geometry.location.lat;
      this.lugar.lng = result.json().results[0].geometry.location.lng;
      
      if(this.id != 'new'){
        this.lugaresService.editarLugar(this.lugar);
        alert('Negocio Editado con exito');
      }
      else{
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar).subscribe();
        alert('Negocio Guardado con exito');
        
      }
      
      this.lugar = {};
    });

  }
}
