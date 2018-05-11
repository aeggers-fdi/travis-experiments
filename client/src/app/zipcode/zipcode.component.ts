import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {

  city: string;
  state: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
      this.http.get("http://localhost:3000/users").subscribe({
        next: (x:any) => {
          console.log(x);
          this.city = x.City;
          this.state = x.State;
        },
        complete: () => {
          console.log("And done");
        }
      })
      // return this.http.get("http://localhost:3000/users");
  }

}
