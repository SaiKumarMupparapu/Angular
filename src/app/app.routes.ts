import { Routes } from '@angular/router';
import { LoginForRouteComponent } from './login-for-route/login-for-route.component';
import { AboutForRouteComponent } from './about-for-route/about-for-route.component';
import { ContactForRouteComponent } from './contact-for-route/contact-for-route.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'login',component:LoginForRouteComponent},
    {path:'about',component:AboutForRouteComponent},
    {path:'contact',component:ContactForRouteComponent},
    {path:'',component:HomeComponent},
    {path:'user/:id/:name',component:UserComponent},
    {path:'**',component:PageNotFoundComponent}
];
