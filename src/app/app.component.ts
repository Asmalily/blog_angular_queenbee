import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import{SEOService} from './services/seo.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SEOService: any;
  // title = 'Queen Bee';
  constructor(private title: Title,
     private meta: Meta,private router:Router
     ,private activatedRoute:ActivatedRoute,private seoService:SEOService ) { }

    ngOnInit() {
      console.log(this.router.events)
      this.router.events.pipe(
         filter((event:any) => event instanceof NavigationEnd),
         map(() => this.activatedRoute),
         map((route) => {
           while (route.firstChild) route = route.firstChild;
           return route;
         }),
         filter((route) => route.outlet === 'primary'),
         mergeMap((route) => route.data)
        )
        .subscribe((event) => {
          this.seoService.updateTitle(event['title']);
          this.seoService.updateOgUrl(event['ogUrl']);
          //Updating Description tag dynamically with title
          this.seoService.updateDescription(event['title'] + event['description'])
        }); 
      }
    
  }

