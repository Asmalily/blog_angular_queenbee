import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';


@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css'],
})
export class BlogpostComponent implements OnInit {
  itemId: any;
   posts?: Post; 
   myDate= Date.now()
   

  constructor(
    private route: ActivatedRoute,
    private postServ: PostService,
    private router: Router) {}
  id: string = this.route.snapshot.params['id'];   



  // getSingleTask(){
  //   this.postServ.getpostById(this.id).subscribe({
  //     next:(res:any)=>{
  //       this.posts = res
  //     }
  //   })
  // }




  ngOnInit(): void {
    // this.getSingleTask()


    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
      this.postServ.getpostById(this.itemId).subscribe((res) => {
      this.posts=res
      });
    });
  }
}
