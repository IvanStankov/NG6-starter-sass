import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';

import NavigationComponent from './components/navigation/navigation';

import HomeComponent from './pages/home/home';
import CreateComponent from './pages/create/create';

import GoatsService from './services/GoatsService';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
  uiRouter
])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
  "ngInject";

  NavigationComponent.name,
  CreateComponent.name,
  HomeComponent.name

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      template: '<app></app>'
    })
    .state('app.home', {
      url: '/home',
      template: '<home></home>'
    })
    .state('app.create', {
      url: '/create',
      template: '<create></create>'
    });

    $urlRouterProvider.otherwise("/app/home");
})
.component('app', AppComponent)
.factory('GoatsService', GoatsService);
