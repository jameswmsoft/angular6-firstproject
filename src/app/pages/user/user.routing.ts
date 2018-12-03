import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        // children: [
        //     { path: '', redirectTo: 'basic-tables', pathMatch: 'full' },
        //     { path: 'basic-tables', component: BasicTablesComponent },
        //     { path: 'data-user', component: DataTableComponent },
        // ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
