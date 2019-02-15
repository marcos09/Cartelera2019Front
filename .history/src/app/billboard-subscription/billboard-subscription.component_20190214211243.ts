import { Component, OnInit } from '@angular/core';
import { Billboard } from 'app/billboard/billboard';
import { BillboardService } from 'app/services/billboard.service';

@Component({
  selector: 'app-billboard-subscription',
  templateUrl: './billboard-subscription.component.html'
})
export class BillboardSubscriptionComponent implements OnInit {

  billboards: Billboard[];
  billboardsSubscribe: Billboard[];

  constructor(private billboardService: BillboardService) { }

  ngOnInit() {
    this.billboardService.getBillboards().subscribe(
      result => {
        this.billboards = result;
      }
    );
  }

  subscription(idBillboard: number) {
    this.billboardService.subscribe(idBillboard).subscribe();

  }
  unsubscription(idBillboard: number) {
    this.billboardService.unsubscribe(idBillboard).subscribe();

  }


}
