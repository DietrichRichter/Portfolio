import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegaleNoticeComponent } from './legale-notice/legale-notice.component';

const routes: Routes = [
  {path: '', component: HeadComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'legalenotice', component: LegaleNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
