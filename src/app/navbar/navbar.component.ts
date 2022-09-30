import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const listContainer = document.getElementsByClassName('list-container')[0];

    toggleButton.addEventListener('click', () => {
      listContainer.classList.toggle('active');
    })
  }

}
