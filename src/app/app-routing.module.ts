import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchVideoScreenComponent } from './screens/search-video-screen/search-video-screen.component';
import { ListsVideoScreenComponent } from './screens/lists-video-screen/lists-video-screen.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchVideoScreenComponent,
  },
  {
    path: 'lists',
    component: ListsVideoScreenComponent,
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
