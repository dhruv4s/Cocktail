import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CocktailSearchComponent } from './cocktail-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailSearchService } from './cocktail-search.service'
import { CarouselModule} from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule} from 'primeng/progressspinner';
import { CocktailHomeService } from '../cocktail-home/cocktail-home.service'
import { CocktailHomeComponent } from '../cocktail-home/cocktail-home.component';
import { ToastModule} from 'primeng/toast';
import { MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule} from '@angular/forms';

describe('CocktailSearchComponent', () => {
  let component: CocktailSearchComponent;
  let fixture: ComponentFixture<CocktailSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailSearchComponent,CocktailHomeComponent ],
      imports:[HttpClientModule,RouterTestingModule,HttpClientTestingModule,CarouselModule,DialogModule,ProgressSpinnerModule,ToastModule,DropdownModule,FormsModule],
      providers: [CocktailSearchService,CocktailHomeService,MessageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise variables', () => {
    expect(component.displayDetails).toBeFalse();
    expect(component.showSpinner).toBeTrue();
  });

  it('search cocktail', () => {
    component.searchCocktail('margarita')
    expect(component.showSpinner).toBeTrue();
  });

  it('filter cocktail', () => {
    component.filterCocktail('c','cocktail')
    expect(component.showSpinner).toBeTrue();
  });

  it('get cocktail', () => {
    component.getCocktailDetail('11007')
    expect(component.displayDetails).toBeFalse();
  });
});
