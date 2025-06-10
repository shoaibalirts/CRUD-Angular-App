import { Routes } from '@angular/router';
import { AllUsers } from './crud/pages/all-users/all-users';
import { AddUser } from './crud/pages/add-user/add-user';

export const routes: Routes = [
    {
        path: "all",
        component: AllUsers
    },
    {
        path: "add",
        component: AddUser
    }
];
