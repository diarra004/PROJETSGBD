import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MadickeComponent } from './madicke/madicke.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importez AppRoutingModule
// Importez AccueilComponent

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    InscriptionComponent,
    EtudiantComponent,
    MadickeComponent // Ajoutez AccueilComponent aux déclarations
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
