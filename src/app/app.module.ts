import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { AuthInterceptor } from './auth/auth.interceptor';

import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { SliderModule } from 'primeng/slider';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { ListboxModule } from 'primeng/listbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { BlockUIModule } from 'primeng/blockui';
import { DeferModule } from 'primeng/defer';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ImageModule } from 'primeng/image';

// addition
import { PasswordModule } from 'primeng/password';
import { ScrollTopModule } from 'primeng/scrolltop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeModule } from 'primeng/badge';
import { RatingModule } from 'primeng/rating';
import { GalleriaModule } from 'primeng/galleria';
import { ChipModule } from 'primeng/chip';
import { MessageService } from 'primeng/api';
import { ToastService } from './services/toast.service';
import { CarouselModule } from 'primeng/carousel';

// component
import { LoginPageComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderComponent } from './pages/order/order.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { InfoOrderComponent } from './components/info-order/info-order.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OrderConfirmComponent } from './pages/order-confirm/order-confirm.component';

const PRIMENG_DEPENDENCIES = [
    ButtonModule,
    MultiSelectModule,
    TableModule,
    SkeletonModule,
    BreadcrumbModule,
    PanelModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    AutoCompleteModule,
    TooltipModule,
    FieldsetModule,
    SliderModule,
    ToastModule,
    DynamicDialogModule,
    InputSwitchModule,
    DividerModule,
    ChipsModule,
    ListboxModule,
    ConfirmPopupModule,
    AccordionModule,
    ToolbarModule,
    SplitterModule,
    ScrollPanelModule,
    CascadeSelectModule,
    CalendarModule,
    ToggleButtonModule,
    ProgressBarModule,
    TagModule,
    BlockUIModule,
    DeferModule,
    FileUploadModule,
    SelectButtonModule,
    PasswordModule,
    ScrollTopModule,
    FontAwesomeModule,
    BadgeModule,
    FormsModule,
    RatingModule,
    GalleriaModule,
    ImageModule,
    ChipModule,
    CarouselModule
];

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegisterComponent,
        HomeComponent,
        NavbarComponent,
        FoodDetailComponent,
        CartComponent,
        MenuComponent,
        OrderComponent,
        FoodSearchComponent,
        InfoOrderComponent,
        ListOrderComponent,
        ProfileComponent,
        NotFoundComponent,
        OrderConfirmComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ...PRIMENG_DEPENDENCIES
    ],
    exports: [...PRIMENG_DEPENDENCIES],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        },
        ToastService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
