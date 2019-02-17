import {Component, OnInit} from '@angular/core';

import {AppDataService} from '../services/app-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  users$;

  constructor(private appDataService: AppDataService) {
  }

  ngOnInit() {
    this.users$ = this.appDataService.getUsers();
  }
}
