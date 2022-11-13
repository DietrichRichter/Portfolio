import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  sendingMail = false;
  userName: any;
  userEmail: any;
  userText: any;


  constructor() { }

  ngOnInit(): void {
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', emailField.value);

    await fetch('https://dietrich-richter.com/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;

    if (nameField.disabled == false) {
      this.sendingMail = true;
    }
  }

  openSendMail() {
    document.getElementById('close')?.classList.remove('d-none');
  }

  closeSend() {
    document.getElementById('close')?.classList.add('d-none');
    this.myForm.nativeElement.reset();
  }
}