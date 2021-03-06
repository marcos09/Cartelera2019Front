import { Component, OnInit } from '@angular/core';
import { BillboardService } from 'app/services/billboard.service';
import { Billboard } from 'app/billboard/billboard';
import { Publication } from './publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
})
export class PublicationsComponent implements OnInit {

  billboards: Billboard[];
  billboard: Billboard;
  publications: Publication[];

  constructor(private billboardService: BillboardService) { }

  ngOnInit() {
    this.billboardService.getBillboards().subscribe(
      result => {
        this.billboards = result;
      }
    );
  }

  refreshPublications() {
    this.billboardService.getPublications(this.billboard.id).subscribe(
      result => {
        this.publications = result;
        console.log(this.publications);
      }
    );
  }

}
