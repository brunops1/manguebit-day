import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BannerService } from './banner.service';

@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule
  ],
  exports: [BannerComponent],
  providers: [BannerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerModule { }
