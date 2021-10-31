import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styles: [
  ]
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;


  constructor(private sharedService: SharedService, public fb: FormBuilder) {
    this.contactForm = this.fb.group({
      projectDescription: [''],
      name: [''],
      email: [''],
      number: ['']
    })
  }

  ngOnInit(): void {
  }


    onSubmit() {
      this.sharedService.addContact(
        this.contactForm.value).subscribe(
        result => console.log(result),
        (error) => console.log(error)
      );
    }

}
