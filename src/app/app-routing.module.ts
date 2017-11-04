import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { CsGoComponent } from './cs-go/cs-go.component';

const routes: Routes = [
  { path: '', component: HeroesComponent  },
  { path: 'heroes', component: HeroesComponent },
  { path: 'cs-go', component: CsGoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [HeroesComponent, CsGoComponent];
