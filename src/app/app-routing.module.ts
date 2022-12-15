import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';

const routes: Routes = [
  {path:'conatcts',component:ContactlistComponent},
  {path:'',redirectTo:'contacts',pathMatch:"full"},
  {path:'edit/:id',component:ContacteditComponent},
  {path:'create-contact',component:CreatecontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
