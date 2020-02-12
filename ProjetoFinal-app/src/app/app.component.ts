import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  currentUrl = this.router.url;

  public appPages = [
    {
      title: 'Intro',
      url: '/intro',
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
    title: 'Perfil',
    url: '/perfil-vendedor',
    icon: 'person'
    },

    {
      title: 'Login',
      url: '/login',
      icon: 'person-add'
    },

    {
      title: 'Busca',
      url: '/busca',
      icon: 'search'
    },

    {
      title: 'Produto',
      url: '/produto',

    },
    {
      title: 'Sair',
      icon: 'power-outline',

    },


  ];

  public pagesHome = [

    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person-add'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    private router: Router

  ) {

    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewWillEnter(){
    this.checktoken();
  }

  OnIniti(){
    console.log(this.currentUrl);
  }

  // logout() {
  //
  //   this.authService.logoutUser();
  //   console.log( 'flag' );
  //   localStorage.setItem( 'userToken', null);
  //   localStorage.setItem('Usuario', null);
  //   // this.router.navigate(['/home']);
  //
  // }

  logout() {
        this.authService.logoutUser().subscribe(
            (res) => {
                console.log(res);
                localStorage.removeItem('userToken');
                localStorage.removeItem('Usuario');
                this.router.navigate(['/home']);
            }
        );
    }

    checktoken(){
      return localStorage.getItem('userToken');
    }
}
