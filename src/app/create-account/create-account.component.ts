import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
/*
  constructor (private userService: UserService, private snack:MatSnackBar) {}

  public user = {
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:''
  };*/

  ngOnInit(): void {
  }
/*
  formSubmit() {
    console.log(this.user);
    if ( this.user.username =='' || this.user.username == null) {
    // alert('User is required !!');
    this.snack.open('Username is required !! ','',
    {duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    return;
 
    }
  //addUser: userservice
  this.userService.addUser(this.user).subscribe(

   /* (data: any) => {
      //success
      
      console.log(data);
      //alert('success');
      Swal.fire('Success done !!', 'User id is' + data.id, 'success');*/


/*
  (data) => {
  //success
  console.log(data);
 // alert('success');
 Swal.fire('Success', 'user is registered', 'success');  
  },
  (error) => {
  //error
  console.log(error);
 // alert('something went wrong');
 this.snack.open('something went wrong !! ','',
 {duration: 3000,
   verticalPosition: 'top',
   horizontalPosition: 'right',
 });
}
);

}*/
}