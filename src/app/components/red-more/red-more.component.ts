import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-more',
  templateUrl: './red-more.component.html',
  styleUrls: ['./red-more.component.css']
})
export class RedMoreComponent implements OnInit {
  @Input() isReadMore:boolean =false
  public isCollapsed:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
