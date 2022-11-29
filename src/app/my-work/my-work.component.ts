import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  allWorks = true;
  angularWork = false;
  javascriptWork = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAllWorks() {
    this.allWorks = true;
    this.angularWork = false;
    this.javascriptWork = false;
  }

  showAngularWork() {
    this.allWorks = false;
    this.angularWork = true;
    this.javascriptWork = false;
  }

  showJavaScriptWork() {
    this.allWorks = false;
    this.angularWork = false;
    this.javascriptWork = true;
  }

}
