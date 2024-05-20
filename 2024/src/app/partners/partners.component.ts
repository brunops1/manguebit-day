import { Component, OnInit } from '@angular/core';
import { partnersOptions } from './partners-options';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent implements OnInit {
  public partners = partnersOptions;

  public tubaroes: { img_address: string; type: string; sizing?: { width: number; height: number; } }[] = [];

  public guaiamuns: { img_address: string; type: string; sizing?: { width: number; height: number; } }[] = [];

  public aratus: { img_address: string; type: string; sizing?: { width: number; height: number; } }[] = [];

  public chies: { img_address: string; type: string; sizing?: { width: number; height: number; } }[] = [];

  public crabs: { img_address: string; type: string; sizing?: { width: number; height: number; } }[] = [];

  public mobile = false;

  constructor() {}

  public ngOnInit(): void {
    this.setupPartnersCollections();
    this.mobile = (document.getElementsByClassName('nav-bar-body')[0] as HTMLElement).offsetWidth <= 1024;
    console.log(this.mobile)
  }

  public setupPartnersCollections(): void {
    for (const partner of this.partners) {
      if (partner.type == 'tubarao') this.tubaroes.push(partner); 
      if (partner.type == 'guaiamum') this.guaiamuns.push(partner);
      if (partner.type == 'aratu') this.aratus.push(partner);
      if (partner.type == 'chie') this.chies.push(partner);
      if (partner.type == 'crab') this.crabs.push(partner);
    }
    console.log(this.aratus)
  }
}
