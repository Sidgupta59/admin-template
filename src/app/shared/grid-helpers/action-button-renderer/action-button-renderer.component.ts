import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action-button-renderer',
  templateUrl: './action-button-renderer.component.html',
  styleUrls: ['./action-button-renderer.component.scss']
})
export class ActionButtonRendererComponent implements AgRendererComponent {
  public params: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  public onEdit(id: any) {
    this.params.context.componentParent.onEdit(id);
  }

  public onDelete(id: any) {
    this.params.context.componentParent.onDelete(id);
  }

  refresh(): boolean {
    return false;
  }
}
