import { SelfcarepgComponent } from './components/pages/selfcarepg/selfcarepg.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { HousepgComponent } from './components/pages/housepg/housepg.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpostComponent } from './shared-module/blogpost/blogpost.component';
import { OfferspgComponent } from './components/pages/offerspg/offerspg.component';
import { ReviewpgComponent } from './components/pages/reviewpg/reviewpg.component';
import { FoodpgComponent } from './components/pages/foodpg/foodpg.component';
import { WhorusComponent } from './components/header/whorus/whorus.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'house',component:HousepgComponent},
  {path:'post/:id',component:BlogpostComponent},
  {path:'house/post/:id',component:BlogpostComponent},
  {path:'food/post/:id',component:BlogpostComponent},
  {path:'offers/post/:id',component:BlogpostComponent},
  {path:'reviews/post/:id',component:BlogpostComponent},
  {path:'selfCare/post/:id',component:BlogpostComponent},
  {path:'food',component:FoodpgComponent},
  {path:'offers',component:OfferspgComponent},
  {path:'reviews',component:ReviewpgComponent},
  {path:'selfCare',component:SelfcarepgComponent},
  {path:'who',component:WhorusComponent}










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  SharedModuleModule],
})
export class AppRoutingModule { }
