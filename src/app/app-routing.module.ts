import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'faleconosco',
    loadChildren: './modules/fale-conosco/fale-conosco.module#FaleConoscoModule'
  },
  {
    path: 'story',
    loadChildren: './modules/story/story.module#StoryModule'
  },
  {
    path: 'stories',
    loadChildren: './modules/stories/stories.module#StoriesModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
