import { Component } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "../services/api.service";

import { ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AvisDialogComponent } from "../avis-dialog/avis-dialog.component";

@Component({
  selector: "app-avis",
  templateUrl: "./avis.component.html",
  styleUrls: ["./avis.component.css"],
})
export class AvisComponent {
  displayedColumns = ["Avis","matiere","date"];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private api: ApiService,
  ) {}
  
  ngOnInit(): void {
   this.getAllAvis()

  
  }
  
  user = JSON.parse(localStorage.getItem('user')as string)
  openDialog() {
    this.dialog.open(AvisDialogComponent, { width: "50%" });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllAvis(){
    this.api.getAvis()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource = new  MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    },
    error:(err)=>{
      alert("Erreur lors de la recuperation des enregistrements")
    }
  })
  }
}
