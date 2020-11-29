import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailSearchComponent } from "./cocktail-search/cocktail-search.component"

const routes: Routes = [
  { path: "home", component:CocktailSearchComponent },
  { path: "search/:name", component:CocktailSearchComponent},
  { path: "filter/:key/:name", component:CocktailSearchComponent},
  { path: "", component: CocktailSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
