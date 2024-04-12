import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ScheduleComponent } from "./schedule/schedule.component";
import { ScheduleTabletComponent } from "./schedule-tablet/schedule-tablet.component";
import { ScheduleMobileComponent } from "./schedule-mobile/schedule-mobile.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ScheduleComponent, ScheduleTabletComponent, ScheduleMobileComponent],
    exports: [ScheduleComponent, ScheduleTabletComponent, ScheduleMobileComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScheduleModule {}

