import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { FormsModule } from '@angular/forms';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiLabelModule,
  TuiButtonModule,
  TuiSvgModule,
  TuiFormatNumberPipeModule,
} from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { TuiTilesModule } from '@taiga-ui/kit';
import { TuiTabBarModule } from '@taiga-ui/addon-mobile';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TuiStepperModule } from '@taiga-ui/kit';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { TuiCheckboxModule } from '@taiga-ui/kit';
import { TuiComboBoxModule } from '@taiga-ui/kit';
import { TuiFilterByInputPipeModule } from '@taiga-ui/kit';
import { TuiFilterPipeModule } from '@taiga-ui/cdk';
import { TuiStringifyContentPipeModule } from '@taiga-ui/kit';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../src/environments/environment.dev';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { GroupRegisterComponent } from './components/group-register/group-register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    UserRegisterComponent,
    GroupRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiAppBarModule,
    TuiBlockStatusModule,
    TuiLabelModule,
    TuiButtonModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiTilesModule,
    TuiSvgModule,
    TuiTabBarModule,
    TuiLoaderModule,
    TuiStepperModule,
    TuiFilterPipeModule,
    TuiFieldErrorPipeModule,
    TuiCheckboxModule,
    TuiComboBoxModule,
    TuiCheckboxLabeledModule,
    TuiTableModule,
    TuiFormatNumberPipeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
