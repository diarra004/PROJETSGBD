import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-affichepv',
  templateUrl: './affichepv.component.html',
  styleUrls: ['./affichepv.component.css']
})
export class AffichepvComponent implements  OnInit {
  afficheColumns = ['date','lieu','objet','decision','contenu'];
  Samadata!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) slid!: MatPaginator;
  @ViewChild(MatSort) arrange!: MatSort;
  constructor( private api : ApiService) {}
  ngOnInit(): void {
    this.getAllPv();
  }

  getAllPv(){
    this.api.getPv()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.Samadata = new  MatTableDataSource(res);
        this.Samadata.paginator = this.slid;
        this.Samadata.sort = this.arrange;
    },
    error:(err)=>{
      alert("Erreur lors de la recuperation des enregistrements")
    },
  })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.Samadata.filter = filterValue.trim().toLowerCase();
  
    if (this.Samadata.paginator) {
      this.Samadata.paginator.firstPage();
    }
  }
  
}
  
