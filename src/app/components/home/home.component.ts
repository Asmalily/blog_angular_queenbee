import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 posts:Post[]=[]
 myDate= Date.now()

  constructor(private postService:PostService 
    ,private userService:UserService,private route:Router
    ,private toastr:ToastrService) { }
  
  getTasks(){
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
    subScr(email:any){
      this.userService.subscr(email).subscribe({
        next:(res:any)=>{ 
          console.log(res)    
          this.toastr.success(" تم تسجيل بريدك الالكتروني بنجاح")
          this.route.navigateByUrl('')

           },
        error:(httpError:any)=>{
          console.log(httpError)
        }
      })


    }




  ngOnInit(): void {
    this.getTasks()
  }

}
