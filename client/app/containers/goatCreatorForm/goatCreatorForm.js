import angular from 'angular';
import goatCreatorFormComponent from './goatCreatorForm.component';

let goatCreatorFormModule = angular.module('goatCreatorForm', [])

.component('goatCreatorForm', goatCreatorFormComponent)

.name;

export default goatCreatorFormModule;
