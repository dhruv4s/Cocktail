import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CocktailSearchService {
  constructor(private http: HttpClient) {}

  searchCocktail(cocktailName: any): Observable<any> {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    return this.http.get(url)
    .pipe(map(response=>{
        return response;
    }))
    .pipe(catchError(err=>{
        return err;
    }))
  }

  filterCocktail(type:any,cocktailName:any): Observable<any>{
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}=${cocktailName}`
    return this.http.get(url)
    .pipe(map(response=>{
        return response;
    }))
    .pipe(catchError(err=>{
        return err;
    }))
  }

  getCocktailById(id:any): Observable<any>{
    let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    return this.http.get(url)
    .pipe(map(response=>{
        return response;
    }))
    .pipe(catchError(err=>{
        return err;
    }))
  }
}
