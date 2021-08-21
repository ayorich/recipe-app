import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.action';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
  recipesChaged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty recipe',
  //     'simply a test',
  //     'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/02/air-fryer-falafel.jpg?resize=640%2C360&ssl=1',
  //     [new Ingredient('Meat', 1), new Ingredient('Meat', 19)]
  //   ),
  //   new Recipe(
  //     'Burger recipe',
  //     'simply a test',
  //     'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/02/air-fryer-falafel.jpg?resize=640%2C360&ssl=1',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 6)]
  //   ),
  // ];
  private recipes: Recipe[] = [];
  constructor(private store: Store<fromShoppingList.AppState>) {}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChaged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChaged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChaged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChaged.next(this.recipes.slice());
  }
}
