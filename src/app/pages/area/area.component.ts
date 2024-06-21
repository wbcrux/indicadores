import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-area",
	templateUrl: "./area.component.html",
	styleUrls: ["./area.component.scss"]
})
export class AreaComponent implements OnInit {

	public areaId: number | null = null;

	public breadcrumb:any = [];

	private currentUrl:string = "";

	constructor(private _router: Router ,private _route: ActivatedRoute) {
		this.areaId = this._route.snapshot.queryParams["id"] ?? null;
		this.currentUrl = this._router.url;
	}

	ngOnInit(): void {
		this.getData();
	}

	getData(): void {
		if (this.areaId == null) {
			console.log("ID da área: ", this.areaId);
			this._router.navigate(["/"]);
		}

		this.breadcrumb = [
			{
				label: "Área",
				link: this._router.navigateByUrl(this.currentUrl),
				params: {
					id: this.areaId
				}
			}
		];
	}

}