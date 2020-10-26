import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit{

  age;
  desc;
  name;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DetailsDialogComponent>) { }

  ngOnInit() {
    this.age = this.data.product['Product_Age'];
    this.desc = this.data.product['Product_Desc'];
    this.name = this.data.product['Product_Name'];
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
