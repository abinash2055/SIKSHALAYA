import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import{AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
   templateUrl: './login.component.html',
  
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  formGroup1!: FormGroup<any>;
email: any;
password: any;


  constructor(private authservice:AuthService, private http: HttpClient, private router: Router) { }
  
  // initForm(){
  //   this.formGroup1 = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password:  new FormControl ('', [Validators.required])
  //   });

  // }

  ngOnInit(): void {
    // this.initForm();
  }


  loginUser(): void {
    {
     this.authservice.login(this.formGroup1.value).subscribe(
        (response) => {
          // Handle successful login response
          if(response.success){
            console.log(response);
            alert(response.message);

          }
          else{ alert(response.message);
          }
         
          // Redirect to admin dashboard
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Handle login error
          alert('Login error:');
          // Optionally display an error message to the user
        }
      );
  
  }
}
}