import { Routes } from '@angular/router';
import { Frontpage } from './frontpage/frontpage';
import { Gallery } from './gallery/gallery';

export const routes: Routes = [
    {
        path: '',
        component: Frontpage,
        title: 'Forside',
    },
    {
        path: 'gallery',
        component: Gallery,
        title: 'Galleri',
    }
];
