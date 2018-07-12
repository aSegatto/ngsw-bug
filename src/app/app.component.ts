import {Component} from '@angular/core';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: string;

  constructor() {
    firebase.initializeApp(environment.firebase);
  }

  onUpload() {
    this.result = '';
    const blob = new Blob(['This is my blob content'], {type: 'text/plain'});
    const metadata = {
      'contentType': blob.type
    };
    firebase.storage().ref('blob').put(blob, metadata).then(() => {
      this.result = 'success';
    }, (error) => {
      this.result = 'fail' + error;
    });
  }

}
