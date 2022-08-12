
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JokeItemService } from './joke-item.service';
import { Joke } from './joke.interface';
import { JOKESERVICE } from './joketoken.service';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  jokeItemService = inject(JokeItemService);
  currentCategory: string | null = '';
  joke: any;
  subs$: Subscription  = new Subscription();
  ngOnInit(): void {

   this.subs$.add(this.activatedRoute.queryParamMap.subscribe((data: ParamMap)=>{
     this.currentCategory = data.get('category') || 'movie';
     this.getJoke(this.currentCategory);

   }));

   this.subs$.add(this.router.events.subscribe((routerEvent: any)=>{
    console.log(routerEvent);
   }));

  }

  ngOnDestroy(): void {
      this.subs$.unsubscribe();
  }

  goHome() {
    this.router.navigate(['home']);
  }
  refreshJoke() {
    this.getJoke(this.currentCategory = 'movie');
  }

  getJoke(category: string) {
    this.jokeItemService.getJokeFromCategory(category).subscribe((data: Joke)=>{
      this.joke = data;
    })
  }


}
