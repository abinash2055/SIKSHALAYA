import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlName, Validators, FormGroup } from '@angular/forms';
import { passwordMatchValidator } from '../shared/password-match.directive';
import{RegisterStudentService} from './registermanagementservice';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


export class RegisterComponent  implements OnInit {
 
  collegeId: string='';
  fullName: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  gender: string = '';
  dateOfBirth: string = new Date().toISOString();
  messageService: any;
  constructor(private registerstudentservice: RegisterStudentService,private router: Router ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  registerAdmin(): void {
    this.registerstudentservice.registerAdmin(parseInt(this.collegeId), this.fullName,
     this.email, this.password, this.phoneNumber, this.gender, this.dateOfBirth).subscribe(
      (response) => {
        alert('Register successfully');
        this.collegeId='';
        this.fullName='';
        this.email='';
        this.password='';
        this.phoneNumber='';
        this.gender='';
        this.router.navigate(['/login'], { replaceUrl: true });
      
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }
  
  // registerForm = new FormGroup({
  //   collegeId: new FormControl('',[Validators.required]),
  //   phoneNumber: new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required,Validators.email]),
  // })
  // get vcollegeId() {
  //     return this.registerForm.get('collegeId');
    
  // }
  // get vemail() {
  //     return this.registerForm.get('email');
    
  // }
  // get vphoneNumber() {
  //     return this.registerForm.get('phoneNumber');
    
  // }

}

  // constructor(
  //   private fb: FormBuilder,
  //   private authService: AuthService,
  //   private messageService: MessageService,
  //   private router: Router
  // ) { }

  // get collegeId() {
  //   return this.registerForm.controls['collegeId'];
  // }
  // get fullName() {
  //   return this.registerForm.controls['fullName'];
  // }

  // get email() {
  //   return this.registerForm.controls['email'];
  // }

  // get password() {
  //   return this.registerForm.controls['password'];
  // }

  // get gender() {
  //   return this.registerForm.controls['gender'];
  // }

  // get phoneNumber() {
  //   return this.registerForm.controls['phoneNumber'];
  // }

  // get dateOfBirth() {
  //   return this.registerForm.controls['dateOfBirth'];
  // }

  // submitDetails() {
  //   const postData = { ...this.registerForm.value };
  //   this.authService.registerUser(postData as User).subscribe(
  //     response => {
  //       console.log(response);
  //       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
  //       this.router.navigate(['login'])
  //     },
  //     error => {
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
  //     }
  //   )
  // }

