import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroVendedorPage } from './cadastro-vendedor.page';

describe('CadastroVendedorPage', () => {
  let component: CadastroVendedorPage;
  let fixture: ComponentFixture<CadastroVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
