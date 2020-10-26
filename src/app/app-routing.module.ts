import { HatchimalsComponent } from './components/all-brands/hatchimals/hatchimals.component';
import { SearchComponent } from './components/search/search.component';
import { PlayMobileComponent } from './components/all-brands/play-mobile/play-mobile.component';
import { FisherPriceComponent } from './components/all-brands/fisher-price/fisher-price.component';
import { LegoComponent } from './components/all-brands/lego/lego.component';
import { BenTenComponent } from './components/all-brands/ben-ten/ben-ten.component';
import { NinjaTurtlesComponent } from './components/all-brands/ninja-turtles/ninja-turtles.component';
import { CreationComponent } from './components/all-brands/creation/creation.component';
import { FrozenComponent } from './components/all-brands/frozen/frozen.component';
import { SammyFiremanComponent } from './components/all-brands/sammy-fireman/sammy-fireman.component';
import { PawPatrolComponent } from './components/all-brands/paw-patrol/paw-patrol.component';
import { HelloKittyComponent } from './components/all-brands/hello-kitty/hello-kitty.component';
import { MarvelComponent } from './components/all-brands/marvel/marvel.component';
import { BarbieComponent } from './components/all-brands/barbie/barbie.component';
import { KodkodComponent } from './components/all-brands/kodkod/kodkod.component';
import { NerfComponent } from './components/all-brands/nerf/nerf.component';
import { LolComponent } from './components/all-brands/lol/lol.component';
import { PjMasksComponent } from './components/all-brands/pj-masks/pj-masks.component';
import { DisneyComponent } from './components/all-brands/disney/disney.component';
import { FoxMindComponent } from './components/all-brands/fox-mind/fox-mind.component';
import { ViperComponent } from './components/all-brands/viper/viper.component';
import { AgeRightCComponent } from './components/searchByAge/age-right-c/age-right-c.component';
import { AgeRightBComponent } from './components/searchByAge/age-right-b/age-right-b.component';
import { AgeRightAComponent } from './components/searchByAge/age-right-a/age-right-a.component';
import { AgeLeftCComponent } from './components/searchByAge/age-left-c/age-left-c.component';
import { AgeLeftBComponent } from './components/searchByAge/age-left-b/age-left-b.component';
import { AgeLeftAComponent } from './components/searchByAge/age-left-a/age-left-a.component';
import { BirthdayComponent } from './components/leftCategories/birthday/birthday.component';
import { CostumesComponent } from './components/leftCategories/costumes/costumes.component';
import { PoolsComponent } from './components/leftCategories/pools/pools.component';
import { OfficeSuppliesComponent } from './components/leftCategories/office-supplies/office-supplies.component';
import { LastProductsComponent } from './components/leftCategories/last-products/last-products.component';
import { SalesComponent } from './components/leftCategories/sales/sales.component';
import { RecommendedComponent } from './components/leftCategories/recommended/recommended.component';
import { NewProductsComponent } from './components/leftCategories/new-products/new-products.component';
import { SportsCourtyardComponent } from './components/rightCategories/sports-courtyard/sports-courtyard.component';
import { BabiesComponent } from './components/rightCategories/babies/babies.component';
import { LegoGunzComponent } from './components/rightCategories/lego-gunz/lego-gunz.component';
import { KitchensDallhousesComponent } from './components/rightCategories/kitchens-dallhouses/kitchens-dallhouses.component';
import { DollsCharactersComponent } from './components/rightCategories/dolls-characters/dolls-characters.component';
import { BoxThinkingComponent } from './components/rightCategories/box-thinking/box-thinking.component';
import { PopCreationComponent } from './components/rightCategories/pop-creation/pop-creation.component';
import { MotorizedComponent } from './components/rightCategories/motorized/motorized.component';
import { OnWheelsComponent } from './components/rightCategories/on-wheels/on-wheels.component';
import { OnRemoteComponent } from './components/rightCategories/on-remote/on-remote.component';
import { ShippingReturnsComponent } from './components/footerComponents/shipping-returns/shipping-returns.component';
import { SecuringComponent } from './components/footerComponents/securing/securing.component';
import { AuctionComponent } from './components/leftCategories/auction/auction.component';
import { CartComponent } from './components/navbarComponents/cart/cart.component';
import { ForgetPasswordComponent } from './components/navbarComponents/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PurchaseTermsComponent } from './components/navbarComponents/purchase-terms/purchase-terms.component';
import { ContactComponent } from './components/navbarComponents/contact/contact.component';
import { LoginComponent } from './components/navbarComponents/login/login.component';
import { RegisterComponent } from './components/navbarComponents/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/navbarComponents/about/about.component';


const routes: Routes = [
  // Navbar components
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'purchaseTerms', component: PurchaseTermsComponent },
  { path: 'forgetPass', component: ForgetPasswordComponent },
  { path: 'cart', component: CartComponent },
  // Search product
  { path: 'search', component: SearchComponent },
  // Left side categories
  { path: 'auction', component: AuctionComponent },
  { path: 'new-products', component: NewProductsComponent },
  { path: 'recommended', component: RecommendedComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'last-products', component: LastProductsComponent },
  { path: 'office-supplies', component: OfficeSuppliesComponent },
  { path: 'pools', component: PoolsComponent },
  { path: 'costumes', component: CostumesComponent },
  { path: 'birthday', component: BirthdayComponent },
  // Right side categories
  { path: 'on-remote', component: OnRemoteComponent },
  { path: 'on-wheels', component: OnWheelsComponent },
  { path: 'motorized', component: MotorizedComponent },
  { path: 'pop-creation', component: PopCreationComponent },
  { path: 'box-thinking', component: BoxThinkingComponent },
  { path: 'dolls-characters', component: DollsCharactersComponent },
  { path: 'kitchens-dallhouses', component: KitchensDallhousesComponent },
  { path: 'lego-gunz', component: LegoGunzComponent },
  { path: 'babies', component: BabiesComponent },
  { path: 'sports-courtyard', component: SportsCourtyardComponent },
  // All brands
  { path: 'viper', component: ViperComponent },
  { path: 'fox-mind', component: FoxMindComponent },
  { path: 'disney', component: DisneyComponent },
  { path: 'pj-masks', component: PjMasksComponent },
  { path: 'lol', component: LolComponent },
  { path: 'nerf', component: NerfComponent },
  { path: 'kodkod', component: KodkodComponent },
  { path: 'barbie', component: BarbieComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'hello-kitty', component: HelloKittyComponent },
  { path: 'paw-patrol', component: PawPatrolComponent },
  { path: 'sammy-fireman', component: SammyFiremanComponent },
  { path: 'frozen', component: FrozenComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'ninja-turtles', component: NinjaTurtlesComponent },
  { path: 'ben-ten', component: BenTenComponent },
  { path: 'lego', component: LegoComponent },
  { path: 'fisher-price', component: FisherPriceComponent },
  { path: 'play-mobil', component: PlayMobileComponent },
  { path: 'hatchimals', component: HatchimalsComponent },
  // Search by age components
  { path: 'age-0-18', component: AgeLeftAComponent },
  { path: 'age-18-36', component: AgeLeftBComponent },
  { path: 'age-3-5', component: AgeLeftCComponent },
  { path: 'age-6-8', component: AgeRightAComponent },
  { path: 'age-9-11', component: AgeRightBComponent },
  { path: 'age-12', component: AgeRightCComponent },
  // Footer components
  { path: 'securing', component: SecuringComponent },
  { path: 'shipping-returns', component: ShippingReturnsComponent },
  // Page not found and first page components
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
