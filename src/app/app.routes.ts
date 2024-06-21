import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AreaComponent } from "./pages/area/area.component";

export const routes: Routes = [

	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "areas",
		component: AreaComponent,	
	},
	{
		path: "**",
		redirectTo: "",
		pathMatch: "full"
	}
];
