import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadingComponent } from './components/heading/heading.component';
import { RegisterComponent } from './components/navbarComponents/register/register.component';
import { LoginComponent } from './components/navbarComponents/login/login.component';
import { ContactComponent } from './components/navbarComponents/contact/contact.component';
import { PurchaseTermsComponent } from './components/navbarComponents/purchase-terms/purchase-terms.component';
import { AboutComponent } from './components/navbarComponents/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ForgetPasswordComponent } from './components/navbarComponents/forget-password/forget-password.component';
import { CartComponent } from './components/navbarComponents/cart/cart.component';
import { AuctionComponent } from './components/leftCategories/auction/auction.component';
import { SecuringComponent } from './components/footerComponents/securing/securing.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShippingReturnsComponent } from './components/footerComponents/shipping-returns/shipping-returns.component';
import { NavbarRightComponent } from './components/navbar-right/navbar-right.component';
import { OnRemoteComponent } from './components/rightCategories/on-remote/on-remote.component';
import { OnWheelsComponent } from './components/rightCategories/on-wheels/on-wheels.component';
import { MotorizedComponent } from './components/rightCategories/motorized/motorized.component';
import { PopCreationComponent } from './components/rightCategories/pop-creation/pop-creation.component';
import { BoxThinkingComponent } from './components/rightCategories/box-thinking/box-thinking.component';
import { DollsCharactersComponent } from './components/rightCategories/dolls-characters/dolls-characters.component';
import { KitchensDallhousesComponent } from './components/rightCategories/kitchens-dallhouses/kitchens-dallhouses.component';
import { LegoGunzComponent } from './components/rightCategories/lego-gunz/lego-gunz.component';
import { BabiesComponent } from './components/rightCategories/babies/babies.component';
import { SportsCourtyardComponent } from './components/rightCategories/sports-courtyard/sports-courtyard.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { RecommendedComponent } from './components/leftCategories/recommended/recommended.component';
import { NewProductsComponent } from './components/leftCategories/new-products/new-products.component';
import { SalesComponent } from './components/leftCategories/sales/sales.component';
import { LastProductsComponent } from './components/leftCategories/last-products/last-products.component';
import { OfficeSuppliesComponent } from './components/leftCategories/office-supplies/office-supplies.component';
import { PoolsComponent } from './components/leftCategories/pools/pools.component';
import { CostumesComponent } from './components/leftCategories/costumes/costumes.component';
import { BirthdayComponent } from './components/leftCategories/birthday/birthday.component';
import { AgeLeftAComponent } from './components/searchByAge/age-left-a/age-left-a.component';
import { AgeLeftBComponent } from './components/searchByAge/age-left-b/age-left-b.component';
import { AgeLeftCComponent } from './components/searchByAge/age-left-c/age-left-c.component';
import { AgeRightAComponent } from './components/searchByAge/age-right-a/age-right-a.component';
import { AgeRightBComponent } from './components/searchByAge/age-right-b/age-right-b.component';
import { AgeRightCComponent } from './components/searchByAge/age-right-c/age-right-c.component';
import { NavbarAgeSearchComponent } from './components/navbar-age-search/navbar-age-search.component';
import { ViperComponent } from './components/all-brands/viper/viper.component';
import { NavbarBrandsComponent } from './components/navbar-brands/navbar-brands.component';
import { FoxMindComponent } from './components/all-brands/fox-mind/fox-mind.component';
import { DisneyComponent } from './components/all-brands/disney/disney.component';
import { PjMasksComponent } from './components/all-brands/pj-masks/pj-masks.component';
import { LolComponent } from './components/all-brands/lol/lol.component';
import { NerfComponent } from './components/all-brands/nerf/nerf.component';
import { KodkodComponent } from './components/all-brands/kodkod/kodkod.component';
import { BarbieComponent } from './components/all-brands/barbie/barbie.component';
import { MarvelComponent } from './components/all-brands/marvel/marvel.component';
import { HelloKittyComponent } from './components/all-brands/hello-kitty/hello-kitty.component';
import { PawPatrolComponent } from './components/all-brands/paw-patrol/paw-patrol.component';
import { SammyFiremanComponent } from './components/all-brands/sammy-fireman/sammy-fireman.component';
import { FrozenComponent } from './components/all-brands/frozen/frozen.component';
import { CreationComponent } from './components/all-brands/creation/creation.component';
import { NinjaTurtlesComponent } from './components/all-brands/ninja-turtles/ninja-turtles.component';
import { BenTenComponent } from './components/all-brands/ben-ten/ben-ten.component';
import { LegoComponent } from './components/all-brands/lego/lego.component';
import { FisherPriceComponent } from './components/all-brands/fisher-price/fisher-price.component';
import { PlayMobileComponent } from './components/all-brands/play-mobile/play-mobile.component';
import { HatchimalsComponent } from './components/all-brands/hatchimals/hatchimals.component';
import { SearchComponent } from './components/search/search.component';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
// Pipes
import { FormatTimePipe } from './pipes/format-time.pipe';
import {DetailsDialogComponent} from "./components/details-dialog/details-dialog.component";
import {ProductActionsComponent} from "./components/product-actions/product-actions.component";




@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    PurchaseTermsComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeadingComponent,
    ForgetPasswordComponent,
    CartComponent,
    AuctionComponent,
    FormatTimePipe,
    FooterComponent,
    SecuringComponent,
    ShippingReturnsComponent,
    OnRemoteComponent,
    OnWheelsComponent,
    MotorizedComponent,
    NavbarRightComponent,
    PopCreationComponent,
    BoxThinkingComponent,
    DollsCharactersComponent,
    KitchensDallhousesComponent,
    LegoGunzComponent,
    BabiesComponent,
    SportsCourtyardComponent,
    NewProductsComponent,
    NavbarLeftComponent,
    RecommendedComponent,
    SalesComponent,
    LastProductsComponent,
    OfficeSuppliesComponent,
    PoolsComponent,
    CostumesComponent,
    BirthdayComponent,
    AgeLeftAComponent,
    AgeLeftBComponent,
    AgeLeftCComponent,
    AgeRightAComponent,
    AgeRightBComponent,
    AgeRightCComponent,
    NavbarAgeSearchComponent,
    ViperComponent,
    NavbarBrandsComponent,
    FoxMindComponent,
    DisneyComponent,
    PjMasksComponent,
    LolComponent,
    NerfComponent,
    KodkodComponent,
    BarbieComponent,
    MarvelComponent,
    HelloKittyComponent,
    PawPatrolComponent,
    SammyFiremanComponent,
    FrozenComponent,
    CreationComponent,
    NinjaTurtlesComponent,
    BenTenComponent,
    LegoComponent,
    FisherPriceComponent,
    PlayMobileComponent,
    SearchComponent,
    HatchimalsComponent,
    DetailsDialogComponent,
    ProductActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
