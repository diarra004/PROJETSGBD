import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  NoteCc: number;
  NoteDs: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'samba ba', NoteCc: 13, NoteDs: 20},
  {position: 2, name: 'Madicke Cisse', NoteCc: 13, NoteDs: 20},
  {position: 3, name: 'Ousmane Diop', NoteCc: 13, NoteDs: 20},
  {position: 4, name: 'Sidy Diop', NoteCc: 13, NoteDs: 20},
  {position: 5, name: 'Wally Seck', NoteCc: 10, NoteDs:20},
  {position: 6, name: 'Astou Ndiaye', NoteCc: 12.01, NoteDs:20},
  {position: 7, name: 'Nguone Sall', NoteCc: 14.00, NoteDs:20},
  {position: 8, name: 'Mareme Faye', NoteCc: 15.94, NoteDs:20},
  {position: 9, name: 'Viviane Ndour', NoteCc: 18, NoteDs:20},
  {position: 10, name: 'Macky Sall', NoteCc: 17, NoteDs: 20},
];
@Component({
  selector: 'app-fiche-evaluation',
  templateUrl: './fiche-evaluation.component.html',
  styleUrls: ['./fiche-evaluation.component.css']
})
export class FicheEvaluationComponent {
  displayedColumns: string[] = ['position', 'name', 'NoteCc', 'NoteDs'];
  dataSource = ELEMENT_DATA;
  // ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'samba ba', NoteCc: 13, NoteDs: 20},
  //   // Ajoutez d'autres éléments ici si nécessaire
  // ];
  // nouveauElement: PeriodicElement = { position: 0, name: '', NoteCc: 0, NoteDs: 0 };

  // ajouterElement() {
  //   this.dataSource.push(this.nouveauElement);
  //   // Réinitialisez l'objet nouveauElement pour effacer les champs du formulaire
  //   this.nouveauElement = { position: 0, name: '', NoteCc: 0, NoteDs: 0 };
  // }

}
