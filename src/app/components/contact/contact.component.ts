
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Aos from 'aos';

@Component({
  selector: 'app-contact',
  imports:[CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    // Initialize reactive form
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Initialize EmailJS with your Public Key
    emailjs.init('vcuuMXIUGWcLGcCZU');
  }

  // Convenience getters
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit() {
    if (this.contactForm.invalid || this.isSubmitting) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const templateParams = {
      from_name: this.name?.value,
      from_email: this.email?.value,
      reply_email: this.email?.value,   // for Reply-To header
      message: this.message?.value
    };

    emailjs.send(
      'pramod_kumar',      // e.g., service_x5yz12
      'template_email',     // e.g., template_ab12cd3
      templateParams
    )
    .then(() => {
      this.isSubmitted = true;
      this.submitMessage = 'Thank you! Your message has been sent successfully.';
      this.contactForm.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error.text);
      this.submitMessage = 'Sorry, something went wrong. Please try again later.';
    })
    .finally(() => {
      this.isSubmitting = false;
      setTimeout(() => {
        this.isSubmitted = false;
        this.submitMessage = '';
      }, 5000);
    });
  }
  
   ngOnInit(): void {
    // Initialize form
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    // Init AOS animation library
    Aos.init({
      duration: 1000,
      once: true
    });
  }
  }
