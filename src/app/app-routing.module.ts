import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { InscriptionEnseignantComponent } from './inscription-enseignant/inscription-enseignant.component';
import { MenuEnseignantComponent } from './menu-enseignant/menu-enseignant.component';
import { NavebarMenuComponent } from './navebar-menu/navebar-menu.component';
import { RapportComponent } from './rapport/rapport.component';
import { FicheEvaluationComponent } from './fiche-evaluation/fiche-evaluation.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  {path : 'inscription',component: InscriptionComponent},
  {path : 'etudiant',component:EtudiantComponent},
  {path: 'inscription-enseignant', component: InscriptionEnseignantComponent},
  {path: 'menu-enseignant', component: MenuEnseignantComponent},
  {path: 'navebar-menu', component: NavebarMenuComponent},
  {path: 'rapport', component: RapportComponent},
  {path: 'fiche-evaluation', component: FicheEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
