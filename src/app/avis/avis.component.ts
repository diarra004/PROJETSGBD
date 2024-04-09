import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent  {avisForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.avisForm = this.formBuilder.group({
      course: ['', Validators.required],
     
      comments: ['']
    });
  }

  submitForm() {
    if (this.avisForm.valid) {
      const formData = this.avisForm.value;
      console.log('Form submitted:', formData);
      // Ajoutez ici la logique pour enregistrer l'avis (par exemple, via un service)
    } else {
      // Gérer le formulaire invalide si nécessaire
    }
  }
}