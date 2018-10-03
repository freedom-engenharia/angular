import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal.component.html',
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}