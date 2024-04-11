import { Component } from "@angular/core";

@Component({
  selector: "app-menu-enseignant",
  templateUrl: "./menu-enseignant.component.html",
  styleUrls: ["./menu-enseignant.component.css"],
})
export class MenuEnseignantComponent {
  constructor() {}
  user = JSON.parse(localStorage.getItem("user") as string);
  logger = () => {
    console.log(this.user);
  };
  ngOnInit() {
    this.logger();
  }
}
