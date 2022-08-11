import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chuck-card',
  templateUrl: './chuck-card.component.html',
  styleUrls: ['./chuck-card.component.scss']
})
export class ChuckCardComponent implements OnInit, OnChanges {

  @Input()
  joke: string = 'Chuck Norris recently did an audio commentary of one of his best-selling novels';

  @Output()
  likeClicked: EventEmitter<any> = new EventEmitter();

  jokeObj = {
    title: 'joke title',
    content: 'joke content'
  };

  jokeDate = new Date();

  jokesArray = ['joke1', 'joke2', 'joke3']

  showJoke: boolean = false;

  jokesCounter: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('something changed', changes);
  }

  ngOnInit(): void {
    console.log('component init');
  }



  buttonClicked(){
    this.jokesCounter++;
    this.likeClicked.emit();
  }

  shareClicked() {
    this.showJoke = true;
  }

}
