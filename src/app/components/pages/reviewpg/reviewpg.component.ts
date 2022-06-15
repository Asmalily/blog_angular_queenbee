import { Component, OnInit } from '@angular/core';
import { catg } from 'src/app/interfaces/catg';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-reviewpg',
  templateUrl: './reviewpg.component.html',
  styleUrls: ['./reviewpg.component.css']
})
export class ReviewpgComponent implements OnInit {
  catList:catg[]=[] ;
  selectedCatId?:string='مراجعه منتجات';
  posts:Post[]=[];
  p:number=1
  myDate= Date.now()
  constructor(private postService:PostService) { }

  
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
