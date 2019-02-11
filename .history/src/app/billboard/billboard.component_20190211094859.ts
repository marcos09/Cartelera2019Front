import { Component, OnInit } from '@angular/core';
import { BillboardService } from 'app/services/billboard.service';
import { Billboard } from 'app/billboard/billboard';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {

  billboards: Billboard[];

  constructor(private billboardService: BillboardService) { }

  ngOnInit() {
    this.billboardService.getBillboards().subscribe(
      result => {
        this.billboards = result;
      }

    );
  }
  deleteBilllboard(billboard: Billboard){
    this.billboardService.remove(billboard).subscribe();
  }

}
