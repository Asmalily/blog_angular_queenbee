import { Component, OnInit } from '@angular/core';
import { catg } from 'src/app/interfaces/catg';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { Title, Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-selfcarepg',
  templateUrl: './selfcarepg.component.html',
  styleUrls: ['./selfcarepg.component.css']
})
export class SelfcarepgComponent implements OnInit {
  catList:catg[]=[] ;
  selectedCatId?:string='عنايه شخصيه';
  posts:Post[]=[];
  p:number=1
  myDate= Date.now()
  constructor(private postService:PostService,private title:Title,    private meta: Meta
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
    this.title.setTitle("عنايه شخصيه");  

    this.meta.updateTag({ itemprop: 'keywords', content: 'البشره،الشعر،الجسم،غسول،ماسك،كريم،بلسم،شامبو' });
    this.meta.updateTag({  itemprop: 'description', content: 'العنايه الشخصيه بالشعر و البشره و الجسم',
    });
    this.meta.updateTag({ property: 'og:title', content: 'العنايه الشخصيه'});
    this.meta.updateTag({ property: 'og:url', content: '' });
    
  }
}
