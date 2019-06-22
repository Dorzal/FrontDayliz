import { Component, OnInit, Input } from '@angular/core';
import { PremiumsBackendService } from '../../services/premiums-backend.service';
import { ActivatedRoute } from '@angular/router';
import { PremiumsB } from '../premiums-backend/premiumsB';
import { Location } from '@angular/common'


@Component({
  selector: 'app-single-premium-backend',
  templateUrl: './single-premium-backend.component.html',
  styleUrls: ['./single-premium-backend.component.scss']
})
export class SinglePremiumBackendComponent implements OnInit {
  @Input() premium: PremiumsB;

  constructor(
    private route: ActivatedRoute,
    private PremiumsBackendService: PremiumsBackendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPremium();
  }

  getPremium() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PremiumsBackendService.getPremium(id).subscribe(data => this.premium = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PremiumsBackendService.updatePremium(this.premium, id ).subscribe(() => this.goBack());
  }
}
