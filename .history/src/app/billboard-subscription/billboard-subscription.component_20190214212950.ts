import { Component, OnInit } from '@angular/core';
import { Billboard } from 'app/billboard/billboard';
import { BillboardService } from 'app/services/billboard.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-billboard-subscription',
  templateUrl: './billboard-subscription.component.html'
})
export class BillboardSubscriptionComponent implements OnInit {

  billboards: Billboard[];
  billboardsSubscribe: Billboard[];

  constructor(private billboardService: BillboardService, private userService: UserService) { }

  ngOnInit() {
    this.billboardService.getBillboards().subscribe(
      result => {
        this.billboards = result;
      }
    );

     this.userService.getSubscriptions.subscribe(
      result => { this.billboardsSubscribe = result}

    );
  }

  subscription(idBillboard: number) {
    this.billboardService.subscribe(idBillboard).subscribe();

  }
  unsubscription(idBillboard: number) {
    this.billboardService.unsubscribe(idBillboard).subscribe();

  }


}
