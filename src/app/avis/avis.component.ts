import { Component } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {





  displayedColumns = ['matiere','rapport','date'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(public dialog: MatDialog, private api : ApiService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(DialogComponent, { width: '50%'
    });
  }

  samaDialog(){
    this.dialog.open(DialogComponent, { width: '50%'
    });
  }
getAllProducts(){
  this.api.getRapport()
  .subscribe({
    next:(res)=>{
      console.log(res[0])
      this.dataSource = new  MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  },
  error:(err)=>{
    alert("Erreur lors de la recuperation des enregistrements")
  }
})
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

alert(){
  console.log("alert")
}

}