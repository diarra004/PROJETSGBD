import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  avis! : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialisation du formulaire
    this.avis = this.formBuilder.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required]
      // Ajoutez d'autres champs de formulaire selon les besoins
    });
  }

  // Méthode pour soumettre le formulaire d'avis
  onSubmit() {
    if (this.avis.valid) {
      const avisResponses = this.avis.value;
      console.log('Réponses à l\'avis :', avisResponses);
      alert('Merci pour votre avis !'); // Simulation de la confirmation de soumission
      this.avis.reset(); // Réinitialiser le formulaire après soumission (facultatif)
    } else {
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  }
}
