import { Injectable }    from '@angular/core';
import { Category} from '../model/Category'

@Injectable()
export class CategoriesService {
	//TODO: use http and rest
    getCategories() {
        let category1 = new Category();
        category1.name = "Kategoria -juoma";

        let category2 = new Category();
        category2.name = "Kategoria -alkoholi";
        
        let category3 = new Category();
        category3.name = "Kategoria -RUOKA";


        var categories[] = [category1, category2, category3];
        return categories;
    }
}