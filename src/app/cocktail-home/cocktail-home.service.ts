import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CocktailHomeService {
  constructor(private http: HttpClient) {}

  getCategoryList(category: any){
    let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${category}=list`
    return this.http.get(url)
    .pipe(map(response=>{
        return response;
    }))
    .pipe(catchError(err=>{
        return err;
    }))
  }
}
