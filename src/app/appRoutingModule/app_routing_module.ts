import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent} from '../home/home.component'
import { AboutComponent} from '../About/about.component'
import { ContactComponent} from '../Contact/contact.component'
import { ServicesComponent} from '../Services/services.component'

const routes1: Routes= [
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