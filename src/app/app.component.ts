import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  contacts = [];
  constructor() {
    this.contacts = [
      {
        ID: 1,
        first_name: 'lucas',
        last_name: 'phan',
        email: 'lphan@shift3tech.com'
      },
      {
        ID: 2,
        first_name: 'Joe',
        last_name: 'Biden',
        email: 'lphan@shift3tech.com'
      },
      {
        ID: 3,
        first_name: 'Mike',
        last_name: 'Tyson',
        email: 'lphan@shift3tech.com'
      },
      {
        ID: 3,
        first_name: 'Mike',
        last_name: 'Tyson',
        email: 'lphan@shift3tech.com'
      }
    ];
  }

  delete(e) {
    console.log('from delete e: ', e);
    this.contacts.splice(e, 1);
  }
  addRow() {
    this.contacts.unshift({
      ID: 99,
      first_name: 'lucas',
      last_name: 'phan',
      email: 'lphan@shift3tech.com'
    });
  }

  save(row) {
    console.log('from save row: ', row);
  }

}
