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
  zip: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }

  onZipChange(zipValue: string): void {
    if (zipValue.length === 0) {
      this.city = "";
      this.state = "";
    }
    if (zipValue.length !== 5) return;

    this.http.get("http://localhost:3000/zipcode?zip=" + zipValue).subscribe({
      next: (x:any) => {
        console.log(x);
        this.city = x.City;
        this.state = x.State;
      },
      complete: () => {
        console.log("And done");
      }
    })

  }

}
