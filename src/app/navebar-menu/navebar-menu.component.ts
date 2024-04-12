import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navebar-menu',
  templateUrl: './navebar-menu.component.html',
  styleUrls: ['./navebar-menu.component.css']
})
export class NavebarMenuComponent {

  constructor(private router: Router){}
deconnexion(){
  this.router.navigate(['/connexion']);
  
}
}
