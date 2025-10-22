import { Routes } from '@angular/router';
import { Frontpage } from './routes/frontpage/frontpage/frontpage';
import { Dogkennel } from './routes/dogkennel/dogkennel/dogkennel';

export const routes: Routes = [
    {
        path: '',
        component: Frontpage,
        title: 'Forside',
    },
    {
        path: 'hundekennel',
        component: Dogkennel,
        title: 'Hundekennel',
    }
];
