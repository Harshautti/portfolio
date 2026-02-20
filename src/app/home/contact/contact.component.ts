import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm !: FormGroup;
  submitted : boolean = false;

  constructor(private fb : FormBuilder){
    this.initForm();
  }

  initForm(){
    this.contactForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      message : ['',Validators.required]
    })
  }

  submitForm() {
    this.submitted = true;
    if(this.contactForm.invalid)return;
    alert('form submitted');
    this.submitted = false;
    this.contactForm.reset();
  }
}
