import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailSearchService } from './cocktail-search.service'

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.css']
})
export class CocktailSearchComponent implements OnInit {

  home: any;
  results: any;
  displayDetails:boolean=false;
  cocktail:any;
  showSpinner:boolean=true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cocktailSearchService:CocktailSearchService
  ) { }


  ngOnInit(): void {
    if(window.location.href.includes('home')){
      this.home=true;
    }
    else if(window.location.href.includes('search')){
      this.route.params.subscribe(res=>{
        this.searchCocktail(res.name);
        
      })
    }
    else if(window.location.href.includes('filter')){
      this.route.params.subscribe(res=>{
        this.filterCocktail(res.key,res.name)
      })
    }

  }

  searchCocktail(cocktailName:any){
    this.cocktailSearchService.searchCocktail(cocktailName).subscribe(res=>{
      this.results=res.drinks;
      this.home=false;
      this.showSpinner=false;
    })
  }

  filterCocktail(key:any,name:any){
    let  regex = / /gi;
    name=name.replace(regex,'_')
    this.cocktailSearchService.filterCocktail(key,name).subscribe(res=>{
      this.results=res.drinks;
      this.home=false;
      this.showSpinner=false;
    })
  }

  getCocktailDetail(id:any){
    this.showSpinner=true;
    this.cocktailSearchService.getCocktailById(id).subscribe(res=>{
      this.cocktail=res.drinks[0];
      this.displayDetails=true;
      this.showSpinner=false;
    })
  }

  backToHome(){
    this.router.navigate(['home'])
  }

}
