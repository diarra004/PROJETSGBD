import { NgModule } from '@angular/core';



import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuEnseignantComponent } from './menu-enseignant/menu-enseignant.component';
import { InscriptionEnseignantComponent } from './inscription-enseignant/inscription-enseignant.component';
import { NavebarMenuComponent } from './navebar-menu/navebar-menu.component';
import { RapportComponent } from './rapport/rapport.component'; // Importez AppRoutingModule
// Importez AccueilComponent
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { FicheEvaluationComponent } from './fiche-evaluation/fiche-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    InscriptionComponent,
    EtudiantComponent,
    MenuEnseignantComponent,
    InscriptionEnseignantComponent,
    NavebarMenuComponent,
    RapportComponent,
    DialogComponent,
    FicheEvaluationComponent, // Ajoutez AccueilComponent aux déclarations
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
