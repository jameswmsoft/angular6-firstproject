import { Component, OnInit } from '@angular/core';
import {UserDataService} from './userData.service';

@Component({
  selector: 'app-table',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    tableData: Array<any>;

    /* pagination Info */
    pageSize = 10;
    pageNumber = 1;

    constructor(private _tablesDataService: UserDataService) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.tableData = this._tablesDataService.DATA;
    }

    pageChanged(pN: number): void {
        this.pageNumber = pN;
    }

}
