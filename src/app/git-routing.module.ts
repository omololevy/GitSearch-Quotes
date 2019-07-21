import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { GitFormComponent } from './git-form/git-form.component';
import { QuotesComponent } from './quotes/quotes.component';


const routes:Routes = [
{ path:"gitUser",component:GitFormComponent },
{ path:"quotes",component:QuotesComponent }
]


@NgModule({
   imports: [
   CommonModule,
   RouterModule.forRoot(routes)
],
exports: [
   RouterModule
]
})


export class GitRoutingModule { }
