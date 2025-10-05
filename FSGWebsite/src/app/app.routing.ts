import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { SSEComponent } from './games/SSE';
import { ResourcesComponent } from './resources';
import { NewsComponent } from './news';
import { JGComponent } from './games/JG';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games/shopping-spree-extreme', component: SSEComponent },
  { path: 'games/jotunns-greed', component: JGComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'news', component: NewsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
