import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'note/:id', component: ContentComponent },
      { path: '', redirectTo: 'note/1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
