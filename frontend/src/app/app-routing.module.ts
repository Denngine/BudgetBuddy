import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OverviewComponent} from "./components/overview/overview.component";
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {TargetsComponent} from "./components/targets/targets.component";

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"overview", component: OverviewComponent},
  {path:"transactions", component: TransactionsComponent},
  {path:"targets", component: TargetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
