import { Component, OnInit } from '@angular/core';
import { BillboardService } from 'app/services/billboard.service';
import { Billboard } from 'app/model/billboard';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {

  carteleras: Billboard[];

  constructor(private billboardService: BillboardService) { }

  ngOnInit() {
    this.billboardService.getBillboards().subscribe(
      result => {
        this.carteleras = result;
      }

    );
  }

}
