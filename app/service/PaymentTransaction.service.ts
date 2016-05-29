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
 import {PaymentTransaction} from '../model/PaymentTransaction'
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
//	
//	getPaymentTransactions(query:Query):Promise<PaymentTransaction[]>{
////		
////		 return this.http.get(this.getTransactionsUrl)
////         .toPromise()
////         .then(response => response.json().data)
////         .catch(this.handleError);
//		
//		return this.http.get(this.createUrl(query)).toPromise()
//        .then(response => response.json().data)
//        .catch(this.handleError);;
//	}
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