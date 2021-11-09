import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'Summary',      component: HomeComponent },
    { path: 'Question',           component: UserComponent },
    { path: 'Details',          component: TablesComponent },
];
