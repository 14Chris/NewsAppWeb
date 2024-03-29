import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'error-dialog',
  template: '{{ data.name }}',
})
export class ErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}