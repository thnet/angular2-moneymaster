import { Injectable }    from '@angular/core';
import { Category} from '../model/Category'

@Injectable()
export class CategoriesService {
	//TODO: use http and rest
    getCategories() {
        let category1 = new Category();
        category1.name = "Asuminen";

        let category2 = new Category();
        category2.name = "Sähkö";
        
        let category3 = new Category();
        category3.name = "Vakuutus";

        let category4 = new Category();
        category4.name = "Laajakaista";

        let category5 = new Category();
        category5.name = "Vakuutus";

        let category6 = new Category();
        category6.name = "Ruoka";

        let category7 = new Category();
        category7.name = "Lounas";
        
        let category8 = new Category();
        category8.name = "Alkoholi";
        
        let category9 = new Category();
        category9.name = "Ravintolat";
        
        let category10 = new Category();
        category10.name = "Terveys";
        
        let category11 = new Category();
        category11.name = "Harrastukset";
        
        let category11 = new Category();
        category11.name = "Matkailu";
        
        let category12 = new Category();
        category12.name = "Vaate";
        
        let category12 = new Category();
        category12.name = "Auto";
        
        let category13 = new Category();
        category13.name = "Kirjat ja lehdet";
        
        let category14 = new Category();
        category14.name = "Bensa";
        
        let category15 = new Category();
        category15.name = "KodinTarvike";
        
        let category16 = new Category();
        category16.name = "Jäsenmaksut";
        
        let category17 = new Category();
        category17.name = "Parturi";

        var categories[] = [category1, category2, category3, category4, category5, category6, category7, category8,
                            category9, category10, category11, category12, category13, category14, category15, category16
                            category17];
        return categories;
    }
}