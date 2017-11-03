import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { Nav1Component } from './siteComponents/nav-1/nav-1.component';
import { Nav2Component } from './siteComponents/nav-2/nav-2.component';
import { BasicCardComponent } from './siteComponents/basic-card/basic-card.component';
import { FooterOneComponent } from './siteComponents/footer-one/footer-one.component';
import { PageOneComponent } from './sitePages/page-one/page-one.component';
import { PageTwoComponent } from './sitePages/page-two/page-two.component';
import { PageThreeComponent } from './sitePages/page-three/page-three.component';
import { PageFourComponent } from './sitePages/page-four/page-four.component';
import { PageFiveComponent } from './sitePages/page-five/page-five.component';
import { PageSixComponent } from './sitePages/page-six/page-six.component';
import { PageSevenComponent } from './sitePages/page-seven/page-seven.component';
import { CarouselOneComponent } from './siteComponents/carousel-one/carousel-one.component';
import { CarouselTwoComponent } from './siteComponents/carousel-two/carousel-two.component';
import { CarouselThreeComponent } from './siteComponents/carousel-three/carousel-three.component';
import { CollapsibleOneComponent } from './siteComponents/collapsible-one/collapsible-one.component';
import { DropdownOneComponent } from './siteComponents/dropdown-one/dropdown-one.component';
import { MaterialboxOneComponent } from './siteComponents/materialbox-one/materialbox-one.component';
import { MaterialboxTwoComponent } from './siteComponents/materialbox-two/materialbox-two.component';
import { ModalOneComponent } from './siteComponents/modal-one/modal-one.component';
import { ParallaxOneComponent } from './siteComponents/parallax-one/parallax-one.component';
import { TabsOneComponent } from './siteComponents/tabs-one/tabs-one.component';
import { TabsTwoComponent } from './siteComponents/tabs-two/tabs-two.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Nav2Component,
    BasicCardComponent,
    FooterOneComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    CarouselOneComponent,
    CarouselTwoComponent,
    CarouselThreeComponent,
    CollapsibleOneComponent,
    DropdownOneComponent,
    MaterialboxOneComponent,
    MaterialboxTwoComponent,
    ModalOneComponent,
    ParallaxOneComponent,
    TabsOneComponent,
    TabsTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
