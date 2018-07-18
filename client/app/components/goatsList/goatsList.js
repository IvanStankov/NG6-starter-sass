import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatsListComponent from './goatsList.component';
import GoatListItemComponent from '../goatListItem/goatListItem';

let goatsListModule = angular.module('goatsList', [
  GoatListItemComponent.name
])

.component('goatsList', goatsListComponent)

.name;

export default goatsListModule;
