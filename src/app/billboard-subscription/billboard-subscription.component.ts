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
	billboardsSubscribe;

	constructor(private billboardService: BillboardService, private userService: UserService) { }

	ngOnInit() {
		this.billboardService.getBillboards().subscribe(
			result => {
				this.billboards = result;
			}
		);
		//this.billboardsSubscribe = //console.log(this.userService.getSubscriptions().subscribe().);

	}

	subscription(idBillboard: number) {
		this.billboardService.subscribe(idBillboard).subscribe();
	}
	
	unsubscription(idBillboard: number) {
		this.billboardService.unsubscribe(idBillboard).subscribe();
	}


}
