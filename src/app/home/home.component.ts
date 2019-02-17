import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'app/services/app-data.service';
import { BillboardService } from 'app/services/billboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css' ]
})

export class HomeComponent implements OnInit {
  billboards$;
  profesors$;

  constructor(private billboardService: BillboardService,
     private appDataService: AppDataService) { }

  ngOnInit() {
    this.billboards$ = this.billboardService.getBillboards();
    this.profesors$ = this.appDataService.getUsersRoleProfesor();

  }

}
