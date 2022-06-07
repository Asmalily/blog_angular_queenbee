import { PostService } from 'src/app/services/post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedMoreComponent } from './components/red-more/red-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HousepgComponent } from './components/housepg/housepg.component';
import {MatCardModule} from '@angular/material/card'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RedMoreComponent,
    HousepgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatCardModule  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
