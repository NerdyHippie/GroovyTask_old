import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { LoadingMessageComponent } from './loading-message/loading-message.component';

@NgModule({
    imports:      [ CommonModule,FormsModule ],
    declarations: [ LoadingMessageComponent ],
    exports:      [
        CommonModule, FormsModule, LoadingMessageComponent ]
})
export class SharedModule {
    constructor() {

    }
}
