import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'angular-tdf';
  public topics: string[] = ['Angular', 'React', 'Vue'];
  public topicHasError: boolean = true;
  public userModel: User = new User(
    'sarzeez',
    'sarzeez1997@gmail.com',
    998994624913,
    'default',
    'morning',
    {
      street: 'Rudakiy',
      city: 'Tinchlik',
    },
    true
  );

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
      return;
    }
    this.topicHasError = false;
  }

  onSubmit() {
    console.log({ user: this.userModel });
  }
}
