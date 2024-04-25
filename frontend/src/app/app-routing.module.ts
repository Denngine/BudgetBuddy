import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OverviewComponent} from "./components/overview/overview.component";
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {TargetsComponent} from "./components/targets/targets.component";

const routes: Routes = [
  {path:"", redirectTo:"home/-1", pathMatch:"full"},
  {path:"home/:id", component: HomeComponent},
  {path:"overview/:id", component: OverviewComponent},
  {path:"transactions/:id", component: TransactionsComponent},
  {path:"targets/:id", component: TargetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
