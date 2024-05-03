import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { NavBarComponent } from "./bar/bar.component";
import { NavBarService } from "./nav-bar.service";
import { CommonModule } from "@angular/common";
import { MenuButtonComponent } from "./menu/menu.component";

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [NavBarService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavBarModule {}