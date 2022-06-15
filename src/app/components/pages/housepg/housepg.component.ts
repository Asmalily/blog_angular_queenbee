import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { catg } from 'src/app/interfaces/catg';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-housepg',
  templateUrl: './housepg.component.html',
  styleUrls: ['./housepg.component.css']
})
export class HousepgComponent implements OnInit {
posts:Post[]=[];
catList:catg[] ;
selectedCatId?:string='البيت';
p:number=1
myDate= Date.now()
users:User[]=[]



  constructor( private postService:PostService,private sanitizer: DomSanitizer) { 
      this.catList=[ {id:1,name:"house"}]

    }
    public getSantizeUrl(url : string) {
        return this.sanitizer.bypassSecurityTrustUrl(url);

    }
    


  getPosts(){
    this.postService.getPosts().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.posts = res
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
    })
  }




  ngOnInit(): void {
    this.getPosts()
    
  }
}
