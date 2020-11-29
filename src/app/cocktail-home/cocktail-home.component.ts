import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CocktailHomeService } from './cocktail-home.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cocktail-home',
  templateUrl: './cocktail-home.component.html',
  styleUrls: ['./cocktail-home.component.css'],
})
export class CocktailHomeComponent implements OnInit {
  displayAbout: boolean = false;
  displaySearch: boolean = false;
  displayFilter: boolean = false;
  showCategoryList: boolean = false;
  showSpinner: boolean = false;
  selectedCocktail: any;
  selectedCategory: any;
  inputName: any;
  cocktailList: any = [];
  categoryList: any = [
    { name: 'Categories', keyword: 'c' },
    { name: 'Glasses', keyword: 'g' },
    { name: 'Ingredients', keyword: 'i' },
    { name: 'Alcoholic', keyword: 'a' },
  ];

  constructor(
    private primengConfig: PrimeNGConfig,
    private cocktailService: CocktailHomeService,
    private route: Router,
    private router: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showHide(element: any) {
    if (element == 'about') {
      this.displayAbout = true;
      this.displaySearch = false;
      this.displayFilter = false;
    } else if (element == 'search') {
      this.inputName = undefined;
      this.displaySearch = true;
      this.displayAbout = false;
      this.displayFilter = false;
    } else if (element == 'filter') {
      this.showCategoryList = false;
      this.displaySearch = false;
      this.displayAbout = false;
      this.displayFilter = true;
    }
  }

  filterCocktail(event: any) {
    this.showSpinner = true;
    this.cocktailService
      .getCategoryList(this.selectedCategory.keyword)
      .subscribe((response) => {
        this.cocktailList = response;
        let obj: any = [];
        if (this.selectedCategory.keyword == 'c') {
          this.cocktailList.drinks.forEach((element: { strCategory: any }) => {
            let eleObj = {
              name: element.strCategory,
            };
            obj.push(eleObj);
          });
        } else if (this.selectedCategory.keyword == 'g') {
          this.cocktailList.drinks.forEach((element: { strGlass: any }) => {
            let eleObj = {
              name: element.strGlass,
            };
            obj.push(eleObj);
          });
        } else if (this.selectedCategory.keyword == 'i') {
          this.cocktailList.drinks.forEach(
            (element: { strIngredient1: any }) => {
              let eleObj = {
                name: element.strIngredient1,
              };
              obj.push(eleObj);
            }
          );
        } else if (this.selectedCategory.keyword == 'a') {
          this.cocktailList.drinks.forEach((element: { strAlcoholic: any }) => {
            let eleObj = {
              name: element.strAlcoholic,
            };
            obj.push(eleObj);
          });
        }
        this.cocktailList = obj;
        this.showCategoryList = true;
        this.showSpinner = false;
      });
  }

  searchCocktail(type: any) {
    if (type == 'search') {
      if (!this.inputName || this.inputName == '') {
        this.messageService.add({
          key: 'bc',
          severity: 'error',
          summary: 'Info',
          detail: 'Please give an input',
        });
      } else if (window.location.href.includes('search')) {
        this.route.navigate([`../${this.inputName}`], {
          relativeTo: this.router,
        });
        this.displaySearch = false;
        this.displayFilter = false;
      } else if (window.location.href.includes('filter')) {
        this.route.navigate([`../../../search/${this.inputName}`], {
          relativeTo: this.router,
        });
        this.displaySearch = false;
        this.displayFilter = false;
      } else {
        this.route.navigate([`../search/${this.inputName}`], {
          relativeTo: this.router,
        });
        this.displaySearch = false;
        this.displayFilter = false;
      }
    } else if (type == 'filter') {
      if (!this.selectedCategory || !this.selectedCocktail) {
        this.messageService.add({
          key: 'bc',
          severity: 'error',
          summary: 'Info',
          detail: 'Please choose an option',
        });
      } else if (window.location.href.includes('search')) {
        this.route.navigate(
          [
            `../../filter/${this.selectedCategory.keyword}/${this.selectedCocktail.name}`,
          ],
          { relativeTo: this.router }
        );
        this.displaySearch = false;
        this.displayFilter = false;
      } else if (window.location.href.includes('filter')) {
        this.route.navigate(
          [
            `../../${this.selectedCategory.keyword}/${this.selectedCocktail.name}`,
          ],
          { relativeTo: this.router }
        );
        this.displaySearch = false;
        this.displayFilter = false;
      } else {
        this.route.navigate(
          [
            `../filter/${this.selectedCategory.keyword}/${this.selectedCocktail.name}`,
          ],
          { relativeTo: this.router }
        );
        this.displaySearch = false;
        this.displayFilter = false;
      }
    }
  }
}
