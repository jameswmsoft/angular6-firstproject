import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { UserComponent } from './user.component';
import {UserDataService} from './userData.service';

@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        UserComponent,
    ],
    providers: [
        UserDataService
    ],
})
export class UserModule { }
