import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './@theme/components/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuParentsComponent } from './@theme/components/menu/components/menu-parents/menu-parents.component';
import { MenuChildrensComponent } from './@theme/components/menu/components/menu-childrens/menu-childrens.component';
import { ThemeSwitcherComponent } from './@theme/components/header/theme-switcher/theme-switcher.component';
import { MainPageComponent } from './pages/sections/main-page/main-page.component';
import { NewsPageComponent } from './@theme/components/menu/components/news-page/news-page.component';
import { SharedModule } from './modules/shared/shared.module';
//import { AdminPageComponent } from './modules/administration/pages/admin-page/admin-page.component';
//import { UsersPageComponent } from './modules/administration/pages/users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenuParentsComponent,
    MenuChildrensComponent,
    ThemeSwitcherComponent,
    MainPageComponent,
    NewsPageComponent,
    // AdminPageComponent,
    // UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
