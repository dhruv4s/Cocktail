import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailHomeService } from './cocktail-home/cocktail-home.service'
import { CocktailHomeComponent } from './cocktail-home/cocktail-home.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { ProgressSpinnerModule} from 'primeng/progressspinner';
import { CarouselModule} from 'primeng/carousel';
import { ToastModule} from 'primeng/toast';
import { MessageService} from 'primeng/api';
import { CocktailSearchComponent } from './cocktail-search/cocktail-search.component';
import { CocktailSearchService } from './cocktail-search/cocktail-search.service';
@NgModule({
  declarations: [
    AppComponent,
    CocktailHomeComponent,
    CocktailSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,HttpClientModule,
    DropdownModule,FormsModule,
    ProgressSpinnerModule,CarouselModule,
    ToastModule
  ],
  providers: [CocktailHomeService,CocktailSearchService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
