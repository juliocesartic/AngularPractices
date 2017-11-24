import { Injectable } from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AutorizacionService{

    constructor(private angularFireAuth : AngularFireAuth, private router:Router){
        this.isLogged();
    }

    public facebookLogin(){
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((result)=>{
            alert('Usuario loggeado con facebook');
            console.log(result);
            this.router.navigate(['/lugares']);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    public login = (email, password) =>{
        console.log("Metodo de login");
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((response)=>{
            console.log(response);
            alert('Usuario dentro del sistema, Puede entrar!');  
            this.router.navigate(['/lugares']);
        }).catch((error)=>{
            console.log(error);
            alert('Un error ha ocurrido.');
            //debugger;
        });
    }

    public registro = (email, password) =>{
        console.log("Email Received: " + email);
        console.log("Password Received: " + password);
        
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((response)=>{
            console.log(response);
            alert('Usuario registrado con exito!');  
        }).catch((error)=>{
            console.log(error);
            alert('Un error ha ocurrido.');
            //debugger;
        });
    }

    public isLogged(){
        return this.angularFireAuth.authState;
    }

    public logout(){
        this.angularFireAuth.auth.signOut();
        alert('Sesion Cerrada');
        this.router.navigate(['/lugares']);
    }
}