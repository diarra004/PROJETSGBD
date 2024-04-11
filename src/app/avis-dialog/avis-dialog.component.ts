import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-avis-dialog",
  templateUrl: "./avis-dialog.component.html",
  styleUrls: ["./avis-dialog.component.css"],
})
export class AvisDialogComponent {
  Form!: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) {}
  ngOnInit() {
    this.Form = this.fb.group({
      contenu: ["", [Validators.required]],
      matiere: ["", [Validators.required]],

    });
  }
  sendAvis() {
    console.log(this.Form.value)
    if (this.Form.valid) {
      this.api.postAvis(this.Form.value).subscribe({
        next: (res) => {
          alert("Avis poster avec avec succes");
        },
        error: () => {
          alert("Erreur d'ajout");
        },
      });
      console.log(this.Form.value);
    }
  }
}
