import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillboardService } from 'app/services/billboard.service';
import { Billboard } from 'app/model/billboard';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
})
export class NewPublicationComponent implements OnInit {

  publicationForm: FormGroup;
  submitted = false;
  billboards$: Billboard;

  constructor(private formBuilder: FormBuilder, private billboardService: BillboardService) { }

  ngOnInit() {
     this.billboardService.getBillboards().subscribe(
        result => {
          this.billboards$ = result;
        }
    );
    this.createForm();
  }

  createForm() {
    this.publicationForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', Validators.required],
      comments: [false, [Validators.required]],
      billboard: ['', [Validators.required]],
    });

  }
  onSubmit() {
    this.submitted = true;
    if (this.publicationForm.invalid) {
        return;
    }

    this.billboardService.addPublication(this.publicationForm.value).subscribe();
    this.createForm();
  }
}
