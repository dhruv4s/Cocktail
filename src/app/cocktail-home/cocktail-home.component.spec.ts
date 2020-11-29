import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailHomeService } from './cocktail-home.service';
import { CocktailHomeComponent } from './cocktail-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule} from 'primeng/toast';
import { FormsModule} from '@angular/forms';

describe('CocktailHomeComponent', () => {
  let component: CocktailHomeComponent;
  let fixture: ComponentFixture<CocktailHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailHomeComponent ],
      imports:[HttpClientModule,RouterTestingModule,HttpClientTestingModule,
        DropdownModule,ButtonModule,DialogModule,ToastModule,FormsModule],
      providers: [CocktailHomeService,MessageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise variables', () => {
    expect(component.displayAbout).toBeFalse();
    expect(component.displaySearch).toBeFalse();
    expect(component.displayFilter).toBeFalse();
    expect(component.showCategoryList).toBeFalse();
    expect(component.showSpinner).toBeFalse();
  });

  it('should open about dialog', () => {
    component.showHide('about')
    expect(component.displayAbout).toBeTrue();
  });

  it('should search about dialog', () => {
    component.showHide('search')
    expect(component.displaySearch).toBeTrue();
  });

  it('should filter about dialog', () => {
    component.showHide('filter')
    expect(component.displayFilter).toBeTrue();
  });
});
