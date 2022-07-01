import { Component, OnInit } from '@angular/core';
import { catg } from 'src/app/interfaces/catg';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { Title, Meta } from '@angular/platform-browser';  

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
  constructor(private postService:PostService ,private title:Title,private meta: Meta
    ) { }

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
    this.title.setTitle("وصفات طعام");  


    this.meta.updateTag({ itemprop: 'keywords', content: '،اكله،دايت ، صحي، خضار، لحم،فراخ، مطبخ ،وصفات،طعام' });
    this.meta.updateTag({  itemprop: 'description', content: 'وصفات طعام لذيذه و صحيه',
    });
    this.meta.updateTag({ property: 'og:title', content: 'وصفات طعام'});
    this.meta.updateTag({ property: 'og:url', content: '' });
  }
}


