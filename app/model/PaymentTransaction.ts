import {PaymentTransactionItem} from './PaymentTransactionItem'
export class PaymentTransaction {
    items: PaymentTransactionItem[];
    date: string;

	constructor(){
		this.items = new Array();
	}

}