import { Component, OnInit, Input } from '@angular/core';
import { PremiumsBackendService } from '../../services/premiums-backend.service';
import { PremiumsB } from './premiumsB';



@Component({
  selector: 'app-premiums-backend',
  templateUrl: './premiums-backend.component.html',
  styleUrls: ['./premiums-backend.component.scss']
})
export class PremiumsBackendComponent implements OnInit {

  premiums: PremiumsB[];
  constructor(private premiumsBackendService: PremiumsBackendService) { }
  pageActuel: number = 1;
  ngOnInit() {
    this.getPremiums();
  }

  getPremiums(): void {
    this.premiumsBackendService.getPremiums().subscribe(premiums => this.premiums = premiums)
  }
  
  delete(premium: PremiumsB): void {
    this.premiums = this.premiums.filter(p => p !== premium);
    this.premiumsBackendService.deletePremium(premium).subscribe();
  }

  add(name: string, price: string, time: string): void {
    
    this.premiumsBackendService.addPremium({name, price, time} as PremiumsB).subscribe(premium => {this.premiums.push(premium)});
  }
}
