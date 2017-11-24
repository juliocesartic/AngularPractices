import { MyGuard } from './services/my-guard.service';
import { AutorizacionService } from './services/autorizacion.service';
import { linkifystr } from 'linkifyjs/string';
import { LugaresService } from './services/lugares.services';
import { LugaresComponent } from './lugares/lugares.component';
import { CrearComponent } from './crear/crear.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Routes,RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';



const appRoutes: Routes = [
  {path: 'lugares', component: LugaresComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'crear/:id', component: CrearComponent, canActivate:[MyGuard]},
  {path: '', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent}];

export const firebaseConfig = {
  apiKey: "AIzaSyAi_R7bGfWnL1zslp0f0GfiKVsVSMjU5bg",
  authDomain: "platzisquare-be526.firebaseapp.com",
  databaseURL: "https://platzisquare-be526.firebaseio.com",
  projectId: "platzisquare-be526",
  storageBucket: "platzisquare-be526.appspot.com",
  messagingSenderId: "288994062393"
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    LoginComponent,
    CrearComponent,
    LinkifystrPipe,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsqCqRCqYdv9_MfTv3272mdUh0tCh_rZk'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
