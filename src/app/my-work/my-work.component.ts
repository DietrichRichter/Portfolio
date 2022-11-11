import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  myWork = [
    {
      img: 'assets/img/work-portfolio.png',
      headline: 'Portfolio',
      description: 'Based on Angular',
      githubLink: 'https://github.com/DietrichRichter/Portfolio',
      tryLink: '#',
      workID: 'work-portfolio'
    },
    {
      img: 'assets/img/startscreen_1.png',
      headline: 'El pollo loco',
      description: 'Based on Java Script',
      githubLink: 'https://github.com/DietrichRichter/El_pollo_loco',
      tryLink: 'http://dietrich-richter.com/El_pollo_loco/index.html',
      workID: 'work-ell-pollo-loco'
    },
    {
      img: 'assets/img/work.join.png',
      headline: 'JOIN',
      description: 'Based on Java Script',
      githubLink: 'https://github.com/Th-Da/JOIN',
      tryLink: 'http://dietrich-richter.com/JOIN/index.html',
      workID: 'work-join'
    },
    {
      img: 'assets/img/pokedex.png',
      headline: 'Pokedex',
      description: 'Based on Java Script and Rest API',
      githubLink: 'https://github.com/DietrichRichter/Pokedex',
      tryLink: 'http://dietrich-richter.com/Pokedex/index.html',
      workID: 'work-pokedex'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showAllWorks() {
    document.getElementById('work-portfolio')?.classList.remove('d-none');
    document.getElementById('work-ell-pollo-loco')?.classList.remove('d-none');
    document.getElementById('work-join')?.classList.remove('d-none');
    document.getElementById('work-pokedex')?.classList.remove('d-none');
  }

  showAngularWork() {
    document.getElementById('work-ell-pollo-loco')?.classList.add('d-none');
    document.getElementById('work-join')?.classList.add('d-none');
    document.getElementById('work-pokedex')?.classList.add('d-none');
    document.getElementById('work-portfolio')?.classList.remove('d-none');
  }

  showJavaScriptWork() {
    document.getElementById('work-portfolio')?.classList.add('d-none');
    document.getElementById('work-ell-pollo-loco')?.classList.remove('d-none');
    document.getElementById('work-join')?.classList.remove('d-none');
    document.getElementById('work-pokedex')?.classList.remove('d-none');
  }

}
