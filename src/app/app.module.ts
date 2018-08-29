import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AdminLinkDirective } from './admin-link.directive';
import { AdminModule } from './admin/admin.module';
import { BackendApiService } from './backend-api.service';
import { ClickMeComponent } from './click-me/click-me.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { KeyupComponent } from './keyup/keyup.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AdminLinkDirective,
    ClickMeComponent,
    FavouriteMoviesComponent,
    KeyupComponent
  ],
  imports: [
    BrowserModule,
    AdminModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
