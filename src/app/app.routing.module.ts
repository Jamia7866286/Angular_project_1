import { NgModule } from '@angular/core';
import { routes,RouterModule, RoutesRecognized } from '@angular/router';
import { AppComponent } from './app.component';


const routes1: routes= [
    {
        path: 'test', component: AppComponent
    },
]
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes1);
    ],
})
export class AppRoutingModule{
