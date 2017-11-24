import { LugaresService } from '../services/lugares.services';
import { Component } from '@angular/core';
import { trigger, style, state, transition, animate } from "@angular/animations";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        //backgroundColor: 'green',
        //transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        //backgroundColor: 'yellow',
        //transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000))
    ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'inicial';


  lat:number = 20.6198513;
  lng:number = -103.4107227;
  //lugares: Observable<any[]>;
  //lugares = null;
  lugares:any[];
  visible:boolean = false;
  errorAbout:String = "";

  animar(){
    this.state = (this.state === 'final') ? 'inicial': 'final';
  }
  animacionInicial(e){
    console.log("Starting..");
    console.log(e);
  }
  animacionTerminal(e){
    console.log("Finished..");
    console.log(e);
  }

  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares().valueChanges().subscribe((values)=>{
        this.lugares = values;
    });
    // lugaresService.getLugares().subscribe(lugares => {
    //   this.lugares = lugares;
    //   var me = this;
    //   me.lugares = Object.keys(me.lugares).map(function(key) {
    //     return  me.lugares[key];
    //   });
    //   this.sate = 'final';s
    //   //debugger;
    // }, error =>{
    //     console.log(error);
    //     this.visible = true;
    //     this.errorAbout = error;
  
    // });
  }


}
