import { PostService } from 'src/app/services/post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedMoreComponent } from './components/red-more/red-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HousepgComponent } from './components/pages/housepg/housepg.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { FoodpgComponent } from './components/pages/foodpg/foodpg.component';
import { OfferspgComponent } from './components/pages/offerspg/offerspg.component';
import { SelfcarepgComponent } from './components/pages/selfcarepg/selfcarepg.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhorusComponent } from './components/header/whorus/whorus.component';
import {MatChipsModule} from '@angular/material/chips';
import { SEOService } from './services/seo.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RedMoreComponent,
    HousepgComponent,
    FoodpgComponent,
    OfferspgComponent,
    SelfcarepgComponent,
    WhorusComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,MatSidenavModule,MatIconModule,
    HttpClientModule,
    FormsModule,MatChipsModule,MatToolbarModule,MatListModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ShareIconsModule,
    MatCardModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    SharedModuleModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
