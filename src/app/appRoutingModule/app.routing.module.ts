import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent} from '../home/home.component'
import { AboutComponent} from '../about/about.component'
import { ContactComponent} from '../contact/contact.component'
import { ServicesComponent} from '../services/services.component'

const routes1: Routes= [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Services', component: ServicesComponent},
]
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes1)
    ],
})
export class AppRoutingModule{

}