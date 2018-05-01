import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { GitFormComponent } from './git-form/git-form.component';
import { RepoFormComponent } from './repo-form/repo-form.component';


const routes:Routes = [
{ path:"gitUser",component:GitFormComponent },
{ path:"gitRepo",component:RepoFormComponent }
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
