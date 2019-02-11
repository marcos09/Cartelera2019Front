import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AppDataService } from 'app/services/app-data.service';
import { BillboardService } from 'app/services/billboard.service';
import { User } from 'app/model/user';

@Component({
  selector: 'app-new-billboard',
  templateUrl: './new-billboard.component.html',
})
export class NewBillboardComponent implements OnInit {

  profesors$: User[];
  createBillboardForm: FormGroup;
  users: FormArray;

  constructor(private billboardService: BillboardService,
    private formBuilder: FormBuilder, private appDataService: AppDataService) { }


  ngOnInit() {
    this.createBillboardForm = this.formBuilder.group({
      nameBillboard: '',
      user: '',
      items: this.formBuilder.array([ this.createItem() ])
    });

    this.appDataService.getProfesors().subscribe(
      result => {
        this.profesors$ = result;
        console.log(result);
      }
    );
  }

  addItem(): void {
    this.users = this.createBillboardForm.get('items') as FormArray;
    this.users.push(this.createItem());
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
    this.users.removeAt(i);
  }

  addUser() {
    console.log("El numero de usuario es: " + this.createBillboardForm.get('user').value);
    console.log("Add user");
  }

}
