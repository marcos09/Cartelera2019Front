import { Component, OnInit } from '@angular/core';
import { BillboardService } from 'app/services/billboard.service';
import { Billboard } from 'app/billboard/billboard';
import { Publication } from './publication';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
})
export class PublicationsComponent implements OnInit {

  billboards: Billboard[];
  billboard: Billboard;
  publications: Publication[];
  billboardSelectForm: FormBuilder;

  constructor(private billboardService: BillboardService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.billboardService.getBillboards().subscribe(
      result => {
        this.billboards = result;
      }
    );

    this.billboardSelectForm = this.formBuilder.group({
      billboard: ['', [Validators.required]],
    });

  }

  refreshPublications() {
    console.log(this.billboard.nameBillboard);
    this.billboardService.getPublications(this.billboard.id).subscribe(
      result => {
        this.publications = result;
        console.log(this.publications);
      }
    );
  }

}
