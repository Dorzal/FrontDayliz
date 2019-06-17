import { Component, OnInit } from '@angular/core';
import { PromotionsB } from './promotionsB';
import { PromotionsBackendService } from '../services/promotions-backend.service';

@Component({
  selector: 'app-promotions-backend',
  templateUrl: './promotions-backend.component.html',
  styleUrls: ['./promotions-backend.component.scss']
})
export class PromotionsBackendComponent implements OnInit {

  promotions: PromotionsB[];
  constructor(private promotionsBackendService: PromotionsBackendService) { }

  ngOnInit() {
    this.getPromotions();
  }

  getPromotions(): void {
    this.promotionsBackendService.getPromotions().subscribe(promotions => this.promotions = promotions)
  }
  
  delete(promotion: PromotionsB): void {
    this.promotions = this.promotions.filter(p => p !== promotion);
    this.promotionsBackendService.deletePromotion(promotion).subscribe();
  }

  add(code: string, time: number, percent: number): void {
    
    this.promotionsBackendService.addPromotion({code, time, percent} as PromotionsB).subscribe(promotion => {this.promotions.push(promotion)});
  }

}
