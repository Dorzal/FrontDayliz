import { Component, OnInit, Input } from '@angular/core';
import { PromotionsB } from '../promotions-backend/promotionsB';
import { ActivatedRoute } from '@angular/router';
import { PromotionsBackendService } from '../../services/promotions-backend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-promotions-backend',
  templateUrl: './single-promotions-backend.component.html',
  styleUrls: ['./single-promotions-backend.component.scss']
})
export class SinglePromotionsBackendComponent implements OnInit {

  @Input() promotion: PromotionsB;

  constructor(
    private route: ActivatedRoute,
    private PromotionsBackendService: PromotionsBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPromotion();
  }

  getPromotion() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PromotionsBackendService.getPromotion(id).subscribe(data => this.promotion = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PromotionsBackendService.updatePromotion(this.promotion, id ).subscribe(() => this.goBack());
  }

}
