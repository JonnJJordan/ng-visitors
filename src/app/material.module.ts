import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatListModule,
        MatIconModule
    ]
})
export class MaterialModule { }