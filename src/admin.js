import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Admin{
  heading = 'Github Admins';
  admins = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
    this.http = http;
  }
  activate(){
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.admins = users);
  }
}
