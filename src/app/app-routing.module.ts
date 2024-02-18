import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithId } from './my-custom-page/my-custom-page-with-id/my-custom-page-with-id';
import { MyCustomPage } from './my-custom-page/my-custom-page.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'my-custom-page', // default page
    pathMatch: 'full',
  },

  {
    path: 'my-custom-page',
    loadChildren: () =>
      import('./my-custom-page/my-custom-page.module').then(
        (m) => m.MyCustomPagePageModule
      ),
    component: MyCustomPage,
  },

  {
    path: 'my-custom-page/my-custom-page-with-id/:id',
    component: MyCustomPageWithId,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
