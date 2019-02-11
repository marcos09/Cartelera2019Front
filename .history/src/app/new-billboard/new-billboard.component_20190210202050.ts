import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AppDataService } from 'app/services/app-data.service';
import { BillboardService } from 'app/services/billboard.service';

@Component({
  selector: 'app-new-billboard',
  templateUrl: './new-billboard.component.html',
})
export class NewBillboardComponent implements OnInit {

  profesors$;
  createBillboardForm: FormGroup;
  items: FormArray;

  constructor(private billboardService: BillboardService,
    private formBuilder: FormBuilder, private appDataService: AppDataService) { }


  ngOnInit() {
    this.createBillboardForm = this.formBuilder.group({
      nameBillboard: '',
      items: this.formBuilder.array([ this.createItem() ])
    });

    this.appDataService.getUsersRoleProfesor().subscribe(
      result => {
        this.profesors$ = result;
      }
    );
  }

  addItem(): void {
    this.items = this.createBillboardForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }


  createItem(): FormGroup {
    return this.formBuilder.group({
      username: 'Hola',
      //[{value: 'Username', disabled: true}],
      firstname: '',
      lastname: 's',
    });
  }

  createItem2(username, firstname, lastname){
    return this.formBuilder.group({
      username: username,
      firstname: firstname,
      lastname: lastname,
    });

  }
  onSubmit() {
    this.billboardService.create(this.createBillboardForm.value).subscribe(
      result => {
      },
      error => {
        console.log('Error');
      }
    );
  }


  deleteUser(i) {
    this.items.removeAt(i);
  }

  addUser() {
  }



}
