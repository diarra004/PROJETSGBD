import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pv',
  templateUrl: './pv.component.html',
  styleUrls: ['./pv.component.css']
})
export class PvComponent {
  form !:FormGroup
  constructor(private Fb :FormBuilder , private service:ApiService){}
  ngOnInit(){
    this.form = this.Fb.group({
      date: ['',[Validators.required]],
      lieu: ['',[Validators.required]],
      objet: ['',[Validators.required]],
      decision: ['',[Validators.required]],
      contenu: ['',[Validators.required]],
      auteur: ['',[Validators.required]]
    })
  }
  
  ajouterPv(){
    if(this.form.valid){

    const formattedDate = new Date().toLocaleDateString();
    this.form.patchValue({ date: formattedDate });
      this.service.postPv(this.form.value).subscribe({
        next:(res)=>{
          console.log(res)
          alert("pv ajouter avec succes")
        },
        error:()=>{
          alert("Erreur d'ajout")
        }
      })
      
      
    }
  }

}
