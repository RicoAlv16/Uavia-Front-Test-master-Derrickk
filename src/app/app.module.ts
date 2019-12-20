import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UsersSearchComponent} from './components-shared/users-search/users-search.component';
import {FormsModule} from '@angular/forms';
import {ExerciseOneComponent} from './pages/exercise-one/exercise-one.component';
import {ExerciseTwoComponent} from './pages/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './pages/exercise-three/exercise-three.component';
import {ExerciseFourComponent} from './pages/exercise-four/exercise-four.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
    {path: 'exercise/1', component: ExerciseOneComponent},
    {path: 'exercise/2', component: ExerciseTwoComponent},
    {path: 'exercise/3', component: ExerciseThreeComponent},
    {path: 'exercise/4', component: ExerciseFourComponent},
    {path: '**', redirectTo: '/exercise/1'}
];


@NgModule({
    declarations: [
        AppComponent,
        UsersSearchComponent,
        ExerciseOneComponent,
        ExerciseTwoComponent,
        ExerciseThreeComponent,
        ExerciseFourComponent,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        ),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
