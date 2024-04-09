import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  productForm !: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      professeur: ['', [Validators.required]],  
      matiere: ['', [Validators.required]],
      heure: ['', [Validators.required]], 
      rapport: ['', [Validators.required]],   
      date: ['', [Validators.required]]
    })


  }
  ajouterRapport(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Produit ajouter avec succes")
        },
        error:()=>{
          alert("Erreur d'ajout")

        }
      })
    }
  }
}
