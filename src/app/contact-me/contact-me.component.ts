import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  async sendMail() {

    let nameField = this.nameField.nativeElement;
    let messageField = this.nameField.nativeElement;
    let emailField = this.nameField.nativeElement;
    let sendButton = this.nameField.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;
    // animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', emailField.value);


    // senden
    await fetch('http://dietrich-richter.com/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )

    // text anzeigen nachricht gesendet
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;

  }

}
