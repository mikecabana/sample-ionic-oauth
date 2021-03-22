import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
    },
    {
        path: 'tabs',
        canActivate: [AuthGuardService],
        loadChildren: () =>
            import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    },
    {
        path: 'auth/callback',
        loadChildren: () =>
            import('./auth/auth-callback/auth-callback.module').then(
                (m) => m.AuthCallbackPageModule
            ),
    },
    {
        path: 'auth/endsession',
        loadChildren: () =>
            import('./auth/end-session/end-session.module').then(
                (m) => m.EndSessionPageModule
            ),
    },
    {
        path: 'landing',
        loadChildren: () =>
            import('./landing/landing.module').then((m) => m.LandingPageModule),
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
