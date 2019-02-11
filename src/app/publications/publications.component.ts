import { Component, OnInit } from '@angular/core';
import { BillboardService } from 'app/services/billboard.service';
import { Billboard } from 'app/billboard/billboard';
import { Publication } from './publication';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
})
export class PublicationsComponent implements OnInit {

  billboards: Billboard[];
  publications: Publication[];
  billboardSelectForm: FormGroup;

  constructor(private billboardService: BillboardService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.billboardService.getBillboards().subscribe(
      result => {
        this.billboards = result;
      }
    );

    this.billboardSelectForm = this.formBuilder.group({
      billboard: ['2', [Validators.required]],
    });

  }

  refreshPublications() {
    this.billboardService.getPublications(this.billboardSelectForm.get('billboard').value).subscribe(
      result => {
        this.publications = result;
        console.log(this.publications);
      }
    );
  }

}
