import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { AlertComponent,LoadingMessageComponent } from './_directives/index';

export const sharedComponents: Array<any> = [AlertComponent,LoadingMessageComponent];

@NgModule({
    imports:      [ CommonModule,FormsModule ],
    declarations: [ sharedComponents ],
    exports:      [
        CommonModule, FormsModule, sharedComponents ]
})
export class SharedModule {
    constructor() {

    }
}
