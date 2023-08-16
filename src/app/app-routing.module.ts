import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocBoxesComponent } from './components/poc-boxes/poc-boxes.component';

const routes: Routes = [
  { path: "", component: PocBoxesComponent },
  { path: "poc-boxes", component: PocBoxesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
