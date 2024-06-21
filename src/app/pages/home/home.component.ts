import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

	public title = "indicadores";
	public count:{ [key: string]: number } = {
		"areas": 9,
		"indicadores": 15,
		"desafios": 155,
	};


	constructor() { 
	}

	ngOnInit(): void {
		// Initialization logic goes here
	}

}