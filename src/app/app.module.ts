import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule




import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EmploitempsComponent } from './emploitemps/emploitemps.component';
import { ComunicationComponent } from './comunication/comunication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { VerificationComponent } from './verification/verification.component';
import { AvisComponent } from './avis/avis.component';

// Importez AccueilComponent

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    
    EtudiantComponent,
    EmploitempsComponent,
    ComunicationComponent,
    VerificationComponent,
    AvisComponent,
   
  
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
