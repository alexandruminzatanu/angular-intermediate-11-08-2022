import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  currentCategory: string | null = '';
  subs$: Subscription  = new Subscription();
  ngOnInit(): void {

   this.subs$.add(this.activatedRoute.queryParamMap.subscribe((data: ParamMap)=>{
     this.currentCategory = data.get('category');
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

}
