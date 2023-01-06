import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionButtonRendererComponent } from 'src/app/shared/grid-helpers/action-button-renderer/action-button-renderer.component';
import { ColumnDataFilterComponent } from 'src/app/shared/grid-helpers/column-data-filter/column-data-filter.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
