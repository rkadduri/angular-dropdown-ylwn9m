import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular 5";
  selectedCountry: any;

  cities = {};

  countries = [
    {
      id: 1,
      name: "France",
      cities: ["Paris", "Marseille", "Nice"]
    },
    {
      id: 2,
      name: "Germany",
      cities: ["Hamburg", "Berlin", "Munich"]
    },
    {
      id: 3,
      name: "Italy",
      cities: ["Roma", "Milan", "Napoli"]
    }
  ];

  ngOnInit() {
    this.countries = this.countries.filter(resp => resp.id !== 3);
  }

  onChange(deviceValue) {
    this.cities = this.countries.filter(x => x.id == deviceValue)[0].cities;
  }
}
