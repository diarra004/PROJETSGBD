import { Router } from "@angular/router";
// connexion.component.ts
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ApiService } from "../services/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.component.html",
  styleUrls: ["./connexion.component.css"],
})
export class ConnexionComponent {
  loginForm!: FormGroup;
  hide: boolean = true;
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      mot_de_passe: ["", [Validators.required]],
    });
  }

  async sendFormData() {
    if (this.loginForm.valid) {
      this.api.login(this.loginForm.value).subscribe({
        next: (res) => {
          // console.log(res)
          if (res) {
            localStorage.setItem("access_Token", res.access_Token);
            localStorage.setItem("user", JSON.stringify(res.user));
            this.router.navigate(["/menu-enseignant"]);
          }
        },
        error: () => {
          alert("Erreur d'ajout");
        },
      });
    }
  }
}
