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

  public tubaroes: { img_address: string, type: string }[] = [];

  public guaiamuns: { img_address: string, type: string }[] = [];

  public aratus: { img_address: string, type: string }[] = [];

  public chies: { img_address: string, type: string }[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.setupPartnersCollections();
  }

  public setupPartnersCollections(): void {
    for (const partner of this.partners) {
      if (partner.type == 'tubarao') this.tubaroes.push(partner); 
      if (partner.type == 'guaiamum') this.guaiamuns.push(partner);
      if (partner.type == 'aratu') this.aratus.push(partner);
      if (partner.type == 'chie') this.chies.push(partner);
    }
  }
}
