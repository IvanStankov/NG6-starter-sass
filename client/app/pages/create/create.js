import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createComponent from './create.component';
import GoatsCreateFormComponent from '../../containers/goatCreatorForm/goatCreatorForm';

let createModule = angular.module('create', [
  uiRouter
])

.component('create', createComponent)

.name;

export default createModule;
