import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    // redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registry',
    loadChildren: () => import('./pages/registry/registry.module').then( m => m.RegistryPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'sub-categories',
    loadChildren: () => import('./pages/sub-categories/sub-categories.module').then( m => m.SubCategoriesPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'forgot-mail',
    loadChildren: () => import('./pages/forgot-mail/forgot-mail.module').then( m => m.ForgotMailPageModule)
  },
  {
    path: 'orders-list',
    loadChildren: () => import('./pages/orders-list/orders-list.module').then( m => m.OrdersListPageModule)
  },
  {
    path: 'orders-details',
    loadChildren: () => import('./pages/orders-details/orders-details.module').then( m => m.OrdersDetailsPageModule)
  },
  {
    path: 'delete-modal',
    loadChildren: () => import('./pages/modals/delete-modal/delete-modal.module').then( m => m.DeleteModalPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'edit-worker',
    loadChildren: () => import('./pages/edit-worker/edit-worker.module').then( m => m.EditWorkerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'image-preview',
    loadChildren: () => import('./pages/modals/image-preview/image-preview.module').then( m => m.ImagePreviewPageModule)
  },
  {
    path: 'new-date',
    loadChildren: () => import('./pages/new-date/new-date.module').then( m => m.NewDatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
