import { Component } from '@angular/core';
import { PaymentTransactionService } from './service/PaymentTransaction.service';
import { EditPaymentTransactionComponent} from './components/editpaymenttransaction.component';
import { ListPaymentTransactionsComponent} from './components/listpaymenttransactions.component';

@Component({
    selector: 'my-app',
    directives: [EditPaymentTransactionComponent, ListPaymentTransactionsComponent],
	template: '<editPaymentTransaction></editPaymentTransaction><listPaymentTransactions></listPaymentTransactions>'
})
export class AppComponent { 

}