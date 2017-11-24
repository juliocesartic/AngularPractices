import {Injectable} from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
@Injectable()
export class LugaresService{

      API_ENDPOINT = 'https://platzisquare-be526.firebaseio.com';

      constructor(private afDB : AngularFireDatabase, private http:Http){}

      public getLugares(){
          return this.afDB.list('lugares');

           /*  if(window.localStorage){s
              let ls:any = localStorage.getItem('firebase:authUser:AIzaSyAi_R7bGfWnL1zslp0f0GfiKVsVSMjU5bg:[DEFAULT]');
      // Pasamos a Objeto
              ls = JSON.parse(ls);
              console.log('En el storage: ', ls);
              return this.http.get(`${this.API_ENDPOINT}/.json?auth=${ls.stsTokenManager.accessToken}`)
                       .map(result =>{
                        const data = result.json().lugares;
                        return data;
                       });
              
            } */

      }

      public buscarLugar(id){
        //return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
        //return this.afDB.list('/lugares/' + id);
        //this.lugares = this.afDB.database.o
        //debugger;
        return this.afDB.database.ref('/lugares/' + id);
        
      }

      public guardarLugar(lugar){
        console.log(lugar);
        //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
        const headers = new Headers({"Content-Type" : "application/json"});
        return this.http.post(this.API_ENDPOINT + "/lugares.json", lugar, { headers : headers });

      }

      public editarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
      }

      public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
      }

      public getLugar(id){
        return this.afDB.object('lugares/' + id);
      }
}