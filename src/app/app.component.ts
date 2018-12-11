import { Component } from '@angular/core';
import { GithubUser } from './model/IGithubUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

    public githubUser1: GithubUser;

    constructor() {
        this.githubUser1 = new GithubUser(false, null, '');
    }
}
