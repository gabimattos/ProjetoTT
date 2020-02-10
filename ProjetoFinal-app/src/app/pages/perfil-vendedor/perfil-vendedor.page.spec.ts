import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilVendedorPage } from './perfil-vendedor.page';

describe('PerfilVendedorPage', () => {
  let component: PerfilVendedorPage;
  let fixture: ComponentFixture<PerfilVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilVendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
