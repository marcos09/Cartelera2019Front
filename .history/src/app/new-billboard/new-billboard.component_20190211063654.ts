import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AppDataService } from 'app/services/app-data.service';
import { BillboardService } from 'app/services/billboard.service';
import { User } from 'app/model/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-new-billboard',
  templateUrl: './new-billboard.component.html',
})
export class NewBillboardComponent implements OnInit {

  profesors$: User[];
  createBillboardForm: FormGroup;
  users: FormArray;
  user: User;

  constructor(private billboardService: BillboardService,
    private formBuilder: FormBuilder, private appDataService: AppDataService,
    private userService: UserService) { }


  ngOnInit() {
    this.createBillboardForm = this.formBuilder.group({
      nameBillboard: '',
      user: '',
      items: this.formBuilder.array([ this.createItem() ])
    });

    this.appDataService.getProfesors().subscribe(
      result => {
        this.profesors$ = result;
      }
    );
  }

  createItem2(id, username, firstname, lastname){
    return this.formBuilder.group({
      id: id,
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
    this.userService.getUserById(this.createBillboardForm.get('user').value).subscribe(
      result => {
        this.user = result;
        this.users = this.createBillboardForm.get('items') as FormArray;
        this.users.push(this.createItem2(this.user.id, this.user.username, this.user.firstName, this.user.lastName));
      }

    )

  }

}
