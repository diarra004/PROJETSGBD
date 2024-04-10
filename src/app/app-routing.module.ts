import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { VerificationComponent } from './verification/verification.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

import { ComunicationComponent } from './comunication/comunication.component';
import { AvisComponent } from './avis/avis.component';
import { EmploiComponent } from './emploi/emploi.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
 
  {path : 'etudiant',component:EtudiantComponent},
 
  {path:'communication',component:ComunicationComponent},
  {path:'verification',component:VerificationComponent},
  {path:'avis',component:AvisComponent},
  {path:'emploi',component:EmploiComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
