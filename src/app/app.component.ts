import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultEmail = "vikasponnusamy019@gmail.com"
  answer = '';
  genders = ["Male", "Female"];
  user = {
    username: '',
    email: '',
    gender: '',
    
  };
  submitted = false;

  @ViewChild('f')
  signupForm!: NgForm;

  suggestName() {
    const name = "Appa"
    this.signupForm.form.patchValue({
      userData: {
        username: name,
        email:"Vik@gamil.com"
      },
      secret: 'pet',
      
    })
  }
  
  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
  

  // onSubmit(form:NgForm) {
  //   console.log(form);
  // }

  
}
