import { Component, OnInit } from '@angular/core';
import { catg } from 'src/app/interfaces/catg';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { Title, Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-offerspg',
  templateUrl: './offerspg.component.html',
  styleUrls: ['./offerspg.component.css']
})
export class OfferspgComponent implements OnInit {
  catList:catg[]=[] ;
selectedCatId?:string='تسوق و عروض';
posts:Post[]=[];

p:number=1
myDate= Date.now()
  constructor(private postService:PostService,private title:Title,private meta: Meta) { }

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
    this.title.setTitle("تسوق و عروض");  

    this.meta.updateTag({ itemprop: 'keywords', content: ' تسوق،مراجعه،منتج،امازون،نون،شي ان ،جوميا،عرض،عروض'});
    this.meta.updateTag({  itemprop: 'description', content: ' اخر عروض التسوق و مراجعه منتجات مجربه شخصيا ',
    });
    this.meta.updateTag({ property: 'og:title', content: 'تسوق و عروض'});
    this.meta.updateTag({ property: 'og:url', content: '' });
    
  }
}


