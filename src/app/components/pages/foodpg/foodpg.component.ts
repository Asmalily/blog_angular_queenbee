import { Component, OnInit } from '@angular/core';
import { catg } from 'src/app/interfaces/catg';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-foodpg',
  templateUrl: './foodpg.component.html',
  styleUrls: ['./foodpg.component.css']
})
export class FoodpgComponent implements OnInit {
  posts:Post[]=[];
  catList:catg[]=[] ;
  selectedCatId?:string='تسوق و عروض';
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


