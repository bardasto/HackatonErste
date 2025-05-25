import {Component, inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {Customers} from '../data';
import {PredictService} from '../predict.service';
import {ReccomendModelComponent} from '../reccomend-model/reccomend-model.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit{
  dialog = inject(MatDialog);
  customers = [...Customers]

  constructor(private predictService: PredictService) {}

  ngOnInit() {
    this.customers.forEach(customer => {
      this.updateCustomerStatus(customer);
    });
  }

  getToolTip(status : number): string {
    return status * 20 + '%';
  }

  openModal(customer: any): void {
    let dialogRef = this.dialog.open(UserProfileComponent, {
      height: '600px',
      width: '800px',
      data: {
        customer: customer
      },
    });
  }

  openSuggestion() {
    let dialogRef = this.dialog.open(ReccomendModelComponent, {
      width: '1200px',
    });
  }
  updateCustomer(customer: any) {
    customer.numOfProducts = customer.numOfProducts + 3;
    this.updateCustomerStatus(customer);
  }

  private getDigitsBeforeDecimal(input: string): number {
    const match = input.match(/^\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  private parseCustomerData(customer: any): any {
    return {
      CreditScore: customer.CreditScore,
      Geography: customer.info.country || 'Unknown', // Assuming country is part of info
      Gender: customer.info.gender || 'Unknown', // Assuming gender is part of info
      Age: customer.info.age || 0, // Assuming age is part of info
      Tenure: customer.Tenure,
      Balance: customer.Balance * 1000,
      NumOfProducts: customer.numOfProducts,
      HasCrCard: customer.hasCreditCard,
      IsActiveMember: customer.isActiveMember,
      EstimatedSalary: customer.income * 1000
    };
  }

  protected updateCustomerStatus(customer: any): void {
    this.predictService.getPrediction(this.parseCustomerData(customer)).subscribe((data: any) => {
      customer.status = this.getDigitsBeforeDecimal(data.probability_of_exit) / 20;
    });
  }

}
