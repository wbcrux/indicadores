import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AreaComponent } from "./area/area.component";
import { ComponentsModule } from "../components/components.module";
import { CountUpModule } from "ngx-countup";

@NgModule({
	declarations: [
		HomeComponent,
		AreaComponent
	],
	exports: [
		HomeComponent,
		AreaComponent
	],
	imports: [
		CommonModule,
		ComponentsModule,
		CountUpModule
	]
})
export class PagesModule { }