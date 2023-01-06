import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColumnDataFilterComponent } from './grid-helpers/column-data-filter/column-data-filter.component';
import { ActionButtonRendererComponent } from './grid-helpers/action-button-renderer/action-button-renderer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    ColumnDataFilterComponent,
    ActionButtonRendererComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    FilterPipe,
    SortPipe,
  ]
})
export class SharedModule { }
