import { Component } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "../services/api.service";

import { ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
  displayedColumns = ["matiere", "rapport", "date"];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private api: ApiService,
    private Fb: FormBuilder
  ) {}
  Form!: FormGroup;
  ngOnInit(): void {
    this.Form = this.Fb.group({
      contenu: ["", [Validators.required]],
    });
  }
  

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
}
