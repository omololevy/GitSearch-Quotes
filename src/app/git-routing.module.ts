import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // We install the needed router Modules from the external router library.

// Imported Components We'll Want to Render Using our router-oulet using routerlinks Created Below
import { GitFormComponent } from './git-form/git-form.component'; 
import { QuotesComponent } from './quotes/quotes.component';

// Defining routes
const routes:Routes = [
	{ path:"gitUser",component:GitFormComponent }, // gitUser routerlink will Render Content from git-form.component.html
	{ path:"quotes",component:QuotesComponent } // // quotes routerlink will Render Content from quotes.component.html
]


@NgModule({
   imports: [
   CommonModule,
   RouterModule.forRoot(routes) // We place the RouterModule.forRoot() module in our imports array and pass in the routesarray.
],
exports: [
   RouterModule
]
})


export class GitRoutingModule { }
