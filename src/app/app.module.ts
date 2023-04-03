import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
