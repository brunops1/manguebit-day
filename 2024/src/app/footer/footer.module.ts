import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterService } from "./footer.service";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    imports: [CommonModule],
    declarations: [FooterComponent],
    exports: [FooterComponent],
    providers: [FooterService]
})
export class FooterModule {}