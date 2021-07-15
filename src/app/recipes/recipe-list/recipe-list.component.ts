import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'simply a test',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/02/air-fryer-falafel.jpg?resize=640%2C360&ssl=1'
    ),
    new Recipe(
      'A test recipe',
      'simply a test',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/02/air-fryer-falafel.jpg?resize=640%2C360&ssl=1'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
