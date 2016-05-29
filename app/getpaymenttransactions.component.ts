import { Component } from '@angular2/core';
import { PaymentTransactionService } from './PaymentTransaction.service';
import { Query} from '../Model/Query';

@Component({
    selector: 'editPaymentTransactions',
    template: '<h1>Get payment transactions</h1>'
})
export class GetPaymentTransactionsComponent {

    constructor(private paymentTransactionService: PaymentTransactionService) {

    }

    getPaymentTransactions(Query query){
    	return this.paymentTransactionService.getPaymentTransactions(query);
    }
}