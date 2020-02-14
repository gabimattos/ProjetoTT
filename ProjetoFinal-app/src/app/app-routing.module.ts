import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'home-logado',
    loadChildren: () => import('./pages/home-logado/home-logado.module').then( m => m.HomeLogadoPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },

  {
    path: 'cadastro-vendedor',
    loadChildren: () => import('./cadastro-vendedor/cadastro-vendedor.module').then( m => m.CadastroVendedorPageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./pages/cadastro-produto/cadastro-produto.module').then( m => m.CadastroProdutoPageModule)
  },
  {
    path: 'perfil-vendedor',
    loadChildren: () => import('./pages/perfil-vendedor/perfil-vendedor.module').then( m => m.PerfilVendedorPageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./pages/produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'produto/:id',
    loadChildren: () => import('./pages/produto/produto.module').then( m => m.ProdutoPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
