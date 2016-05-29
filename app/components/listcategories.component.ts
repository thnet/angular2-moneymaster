import { Component } from '@angular/core';
import { CategoriesService } from '../service/Categories.service';
import { Category} from '../model/Category';

@Component({
    selector: 'listCategories',
    template: '<select [(ngModel)]="selected"><option *ngFor="let category of categories" [ngValue]="category">{{category.name}}</option></select>',
    providers : [CategoriesService]
})
export class ListCategoriesComponent {
	categories: Category[];
	selected:Category;

	constructor(categoriesService: CategoriesService) {
		this.categories = categoriesService.getCategories();
	}
}