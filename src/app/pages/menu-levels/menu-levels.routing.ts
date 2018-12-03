import { Routes, RouterModule } from '@angular/router';
import { MenuLevelsComponent } from './menu-levels.component';
import { Levels2Component } from './components/levels-2/levels-2.component';
import {Levels1Component} from './components/levels-1/levels-1.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MenuLevelsComponent,
        children: [
            { path: '', redirectTo: 'other1', pathMatch: 'full' },
            { path: 'other1', component: Levels1Component },
            { path: 'other2', component: Levels2Component },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
