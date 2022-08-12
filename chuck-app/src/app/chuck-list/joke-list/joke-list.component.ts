import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {


  jokesCategories: string[] = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

  constructor() { }

  ngOnInit(): void {
  }

}
