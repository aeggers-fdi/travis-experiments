import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
      this.http.get("http://localhost:3000/users").subscribe({
        next: x => {
          console.log(x);
        },
        complete: () => {
          console.log("And done");
        }
      })
      return this.http.get("http://localhost:3000/users");
  }

}
