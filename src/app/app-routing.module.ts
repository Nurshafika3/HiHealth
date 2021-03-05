import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'ref',
    loadChildren: () => import('./ref/ref.module').then( m => m.RefPageModule)
  },
  {
    path: 'diet',
    loadChildren: () => import('./diet/diet.module').then( m => m.DietPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'asthma',
    loadChildren: () => import('./asthma/asthma.module').then( m => m.AsthmaPageModule)
  },
  {
    path: 'depression',
    loadChildren: () => import('./depression/depression.module').then( m => m.DepressionPageModule)
  },
  {
    path: 'allergy',
    loadChildren: () => import('./allergy/allergy.module').then( m => m.AllergyPageModule)
  },
  {
    path: 'breath',
    loadChildren: () => import('./breath/breath.module').then( m => m.BreathPageModule)
  },
  {
    path: 'obesity',
    loadChildren: () => import('./obesity/obesity.module').then( m => m.ObesityPageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('./sleep/sleep.module').then( m => m.SleepPageModule)
  },
  {
    path: 'neck',
    loadChildren: () => import('./neck/neck.module').then( m => m.NeckPageModule)
  },
  {
    path: 'malaria',
    loadChildren: () => import('./malaria/malaria.module').then( m => m.MalariaPageModule)
  },
  {
    path: 'ear',
    loadChildren: () => import('./ear/ear.module').then( m => m.EarPageModule)
  },
  {
    path: 'eyes',
    loadChildren: () => import('./eyes/eyes.module').then( m => m.EyesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'whatasthma',
    loadChildren: () => import('./whatasthma/whatasthma.module').then( m => m.WhatasthmaPageModule)
  },
  {
    path: 'auasthma',
    loadChildren: () => import('./auasthma/auasthma.module').then( m => m.AuasthmaPageModule)
  },
  {
    path: 'symptomasthma',
    loadChildren: () => import('./symptomasthma/symptomasthma.module').then( m => m.SymptomasthmaPageModule)
  },
  {
    path: 'solution',
    loadChildren: () => import('./solution/solution.module').then( m => m.SolutionPageModule)
  },
  {
    path: 'whatdepression',
    loadChildren: () => import('./whatdepression/whatdepression.module').then( m => m.WhatdepressionPageModule)
  },
  {
    path: 'audepression',
    loadChildren: () => import('./audepression/audepression.module').then( m => m.AudepressionPageModule)
  },
  {
    path: 'symptomdepress',
    loadChildren: () => import('./symptomdepress/symptomdepress.module').then( m => m.SymptomdepressPageModule)
  },
  {
    path: 'solutiondepress',
    loadChildren: () => import('./solutiondepress/solutiondepress.module').then( m => m.SolutiondepressPageModule)
  },
  {
    path: 'whatallergy',
    loadChildren: () => import('./whatallergy/whatallergy.module').then( m => m.WhatallergyPageModule)
  },
  {
    path: 'auallergy',
    loadChildren: () => import('./auallergy/auallergy.module').then( m => m.AuallergyPageModule)
  },
  {
    path: 'symptomallergy',
    loadChildren: () => import('./symptomallergy/symptomallergy.module').then( m => m.SymptomallergyPageModule)
  },
  {
    path: 'solutionallergy',
    loadChildren: () => import('./solutionallergy/solutionallergy.module').then( m => m.SolutionallergyPageModule)
  },
  {
    path: 'whatbreath',
    loadChildren: () => import('./whatbreath/whatbreath.module').then( m => m.WhatbreathPageModule)
  },
  {
    path: 'aubreath',
    loadChildren: () => import('./aubreath/aubreath.module').then( m => m.AubreathPageModule)
  },
  {
    path: 'symptombreath',
    loadChildren: () => import('./symptombreath/symptombreath.module').then( m => m.SymptombreathPageModule)
  },
  {
    path: 'solutionbreath',
    loadChildren: () => import('./solutionbreath/solutionbreath.module').then( m => m.SolutionbreathPageModule)
  },
  {
    path: 'whatobe',
    loadChildren: () => import('./whatobe/whatobe.module').then( m => m.WhatobePageModule)
  },
  {
    path: 'auobe',
    loadChildren: () => import('./auobe/auobe.module').then( m => m.AuobePageModule)
  },
  {
    path: 'symptomobe',
    loadChildren: () => import('./symptomobe/symptomobe.module').then( m => m.SymptomobePageModule)
  },
  {
    path: 'solutionobe',
    loadChildren: () => import('./solutionobe/solutionobe.module').then( m => m.SolutionobePageModule)
  },
  {
    path: 'whateyes',
    loadChildren: () => import('./whateyes/whateyes.module').then( m => m.WhateyesPageModule)
  },
  {
    path: 'aueyes',
    loadChildren: () => import('./aueyes/aueyes.module').then( m => m.AueyesPageModule)
  },
  {
    path: 'symptomeyes',
    loadChildren: () => import('./symptomeyes/symptomeyes.module').then( m => m.SymptomeyesPageModule)
  },
  {
    path: 'solutioneyes',
    loadChildren: () => import('./solutioneyes/solutioneyes.module').then( m => m.SolutioneyesPageModule)
  },
  {
    path: 'whatsleep',
    loadChildren: () => import('./whatsleep/whatsleep.module').then( m => m.WhatsleepPageModule)
  },
  {
    path: 'ausleep',
    loadChildren: () => import('./ausleep/ausleep.module').then( m => m.AusleepPageModule)
  },
  {
    path: 'symptomsleep',
    loadChildren: () => import('./symptomsleep/symptomsleep.module').then( m => m.SymptomsleepPageModule)
  },
  {
    path: 'solutionsleep',
    loadChildren: () => import('./solutionsleep/solutionsleep.module').then( m => m.SolutionsleepPageModule)
  },
  {
    path: 'whatneck',
    loadChildren: () => import('./whatneck/whatneck.module').then( m => m.WhatneckPageModule)
  },
  {
    path: 'auneck',
    loadChildren: () => import('./auneck/auneck.module').then( m => m.AuneckPageModule)
  },
  {
    path: 'symptomneck',
    loadChildren: () => import('./symptomneck/symptomneck.module').then( m => m.SymptomneckPageModule)
  },
  {
    path: 'solutionneck',
    loadChildren: () => import('./solutionneck/solutionneck.module').then( m => m.SolutionneckPageModule)
  },
  {
    path: 'whatmala',
    loadChildren: () => import('./whatmala/whatmala.module').then( m => m.WhatmalaPageModule)
  },
  {
    path: 'aumala',
    loadChildren: () => import('./aumala/aumala.module').then( m => m.AumalaPageModule)
  },
  {
    path: 'symptommala',
    loadChildren: () => import('./symptommala/symptommala.module').then( m => m.SymptommalaPageModule)
  },
  {
    path: 'solutionmala',
    loadChildren: () => import('./solutionmala/solutionmala.module').then( m => m.SolutionmalaPageModule)
  },
  {
    path: 'whatear',
    loadChildren: () => import('./whatear/whatear.module').then( m => m.WhatearPageModule)
  },
  {
    path: 'auear',
    loadChildren: () => import('./auear/auear.module').then( m => m.AuearPageModule)
  },
  {
    path: 'symptomear',
    loadChildren: () => import('./symptomear/symptomear.module').then( m => m.SymptomearPageModule)
  },
  {
    path: 'solutionear',
    loadChildren: () => import('./solutionear/solutionear.module').then( m => m.SolutionearPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
