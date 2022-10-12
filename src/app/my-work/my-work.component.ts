import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAllWorks() {
    document.getElementById('work-portfolio')?.classList.remove('d-none');
    document.getElementById('work-ell-pollo-loco')?.classList.remove('d-none');
    document.getElementById('work-join')?.classList.remove('d-none');
  }

  showAngularWork() {
    document.getElementById('work-ell-pollo-loco')?.classList.add('d-none');
    document.getElementById('work-join')?.classList.add('d-none');
    document.getElementById('work-portfolio')?.classList.remove('d-none');
  }

  showJavaScriptWork() {
    document.getElementById('work-portfolio')?.classList.add('d-none');
    document.getElementById('work-ell-pollo-loco')?.classList.remove('d-none');
    document.getElementById('work-join')?.classList.remove('d-none');
  }

}
