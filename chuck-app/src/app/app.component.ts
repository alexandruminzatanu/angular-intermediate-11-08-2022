import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-app';

  jokeText = 'It was actually Chuck Norris who gave Halle Berry the vanilla fever';

  likeClicked(){
    this.title = 'JOKES';
  }
}
