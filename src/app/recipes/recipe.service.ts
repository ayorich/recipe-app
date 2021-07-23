import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty recipe',
      'simply a test',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/02/air-fryer-falafel.jpg?resize=640%2C360&ssl=1',
      [new Ingredient('Meat', 1), new Ingredient('Meat', 19)]
    ),
    new Recipe(
      'Burger recipe',
      'simply a test',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/02/air-fryer-falafel.jpg?resize=640%2C360&ssl=1',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 6)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
