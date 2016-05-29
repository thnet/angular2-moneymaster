import { Component } from '@angular/core';
import { PaymentTransactionService } from '../service/PaymentTransaction.service';
import { Query } from '../model/Query';

@Component({
    selector: 'listPaymentTransactions',
    templateUrl: 'App/listpaymenttransactions.html'
    providers : [PaymentTransactionService]
})
export class ListPaymentTransactionsComponent {
	paymentTransactions:PaymentTransaction[];
	query:Query;
	
	constructor(paymentTransactionService: PaymentTransactionService) {
		this.paymentTransactions = paymentTransactionService.getPaymentTransactions(this.query);
	}
}