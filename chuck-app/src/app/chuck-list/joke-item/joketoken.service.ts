import { inject, InjectionToken } from '@angular/core';
import { JokeItemService } from './joke-item.service';

export const JOKESERVICE = new InjectionToken('JOKESERVICE', {
  providedIn: 'platform',
  factory() {
    return inject(JokeItemService)
  }
})
