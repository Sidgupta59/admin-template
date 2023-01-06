import { Component, OnInit } from '@angular/core';
import { AgFilterComponent } from 'ag-grid-angular';
import { IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';

@Component({
  selector: 'app-column-data-filter',
  templateUrl: './column-data-filter.component.html',
  styleUrls: ['./column-data-filter.component.scss']
})
export class ColumnDataFilterComponent implements AgFilterComponent {
  params: IFilterParams;
  filterOptionData: any[];
  searchFilterOptionsBy = '';

  agInit(params: IFilterParams): void {
    this.params = params;
    let rm: any = this.params.rowModel;
    let myArray = rm.rowsToDisplay
      .map((x: any) => {
        let col = this.params.column.getColId();
        let props = col.split('.');
        if (props.length == 1) {
          return x.data[col];
        }
        else if (props.length == 2) {
          let col1 = props[0];
          let col2 = props[1];
          return x.data[col1][col2];
        }
      });
    this.filterOptionData = [...new Set(myArray)];
    this.filterOptionData = this.filterOptionData.filter(function (element) {
      return element !== undefined && element !== null;
    });
  }

  isFilterActive(): boolean {
    return true;
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    if (this.selectedCheckBoxValues.length > 0) {
      return this.selectedCheckBoxValues.indexOf(params.data[this.params.column.getColId()]) > -1;
    }
    else {
      return true;
    }
  }

  getModel() { }

  setModel(model: any) { }

  updateFilter() {
    this.params.filterChangedCallback();
  }

  selectedCheckBoxValues: any[] = [];
  onChange(value: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedCheckBoxValues.push(value);
    } else {
      let index = this.selectedCheckBoxValues.indexOf(value);
      this.selectedCheckBoxValues.splice(index, 1);
    }
    this.updateFilter();
  }
}
