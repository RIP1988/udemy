import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Przepis', 'Taki se przepis', 'https://www.shape.pl/uploads/media/default/0001/05/thumb_4365_default_big.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
