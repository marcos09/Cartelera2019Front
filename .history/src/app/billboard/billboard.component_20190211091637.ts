import { Component, OnInit } from '@angular/core';
import { BillboardService } from 'app/services/billboard.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {

  constructor(private billboardService: BillboardService) { }

  ngOnInit() {

  }

}
