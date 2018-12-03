import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const childRoutes: Routes = [

    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'user', pathMatch: 'full' },
            // { path: 'index', loadChildren: './index/index.module#IndexModule' },
            // { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            // { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            // { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            // { path: 'form', loadChildren: './form/form.module#FormModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'others', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
