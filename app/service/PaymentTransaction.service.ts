/**
 * A service that providers CRUD operations for handling Payment transactions. Start by using https://github.com/typicode/json-server .
 *
 *
 * https://angular.io/docs/js/latest/api/http/Http-class.html
 * http://coenraets.org/blog/2016/02/angular2-ionic2-rest-services/
 * http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
 * http://www.beyondjava.net/blog/getting-started-with-angularjs-2-0-your-first-application/
 * http://www.beyondjava.net/blog/getting-started-with-angularjs-2-0-tools-and-compiler/
 * https://auth0.com/blog/2015/05/14/creating-your-first-real-world-angular-2-app-from-authentication-to-calling-an-api-and-everything-in-between/
 * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
 * 
 * 
  */
import { Injectable }    from '@angular/core';
 import {Http} from '@angular/http';
 import {Category} from '../model/Category'
 import {PaymentTransaction} from '../model/PaymentTransaction'
 import {PaymentTransactionItem} from '../model/PaymentTransactionItem'
 import {Query} from '../model/Query'
 import 'rxjs/add/operator/toPromise';
 //This indicates the Dependency Injector that the class has dependencies that should be injected into the constructor when creating an instance of this class.
 @Injectable()
export class PaymentTransactionService{
	private paymentTransactionsUrl="/paymentransactions"

	constructor (private http: Http) {}
	
	save(paymentTransaction:PaymentTransaction){
		console.log(paymentTransaction);
	}
	
//
//	createPaymentTransaction(paymentTransaction:PaymentTransaction){
//		//http.post
//	}
//	:Promise<PaymentTransaction[]>{
	getPaymentTransactions(query:Query) {
//		
		let p1 = new PaymentTransaction();
		
		let item1 = new PaymentTransactionItem();
		let category1 = new Category();
		category1.name="RUOKA";
		item1.category=category1;
		item1.moneyAmount=100;
		
		let item2 = new PaymentTransactionItem();
		let category2 = new Category();
		category2.name="ASUMINEN";
		item2.category=category2;
		item2.moneyAmount=200;
		
		p1.items = [item1, item2]
		p1.date="2016-02-01";
		
		let p2 = new PaymentTransaction();
		
		let item3 = new PaymentTransactionItem();
		item3.category=category1:
		item3.moneyAmount=33440:
			
		let item4 = new PaymentTransactionItem();
		item4.category=category2;
		item4.moneyAmount=124;
		
		p2.items = [item3, item4]
		p2.date="2016-02-01";
		
		var transactions[] = [p1, p2];
		return transactions;
	}
//		 return this.http.get(this.getTransactionsUrl)
//         .toPromise()
//         .then(response => response.json().data)
//         .catch(this.handleError);
		
//		return this.http.get(this.createUrl(query)).toPromise()
//        .then(response => response.json().data)
//        .catch(this.handleError);;
	}
//	
//	private createUrl(query:Query):string{
//		var url=this.paymentTransactionsUrl;
//		if(query.year!=null){
//			url=+url+"/"+query.year;
//		}
//		if(query.month!=null){
//			url=+url+"/"+query.month;
//		}
//		return url;
//	}
//	
//	 private handleError(error: any) {
//		    console.error('An error occurred', error);
//		    return Promise.reject(error.message || error);
//	}
}