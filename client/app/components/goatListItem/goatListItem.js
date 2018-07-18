import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatListItemComponent from './goatListItem.component';

let goatListItemModule = angular.module('goatListItem', [])

.component('goatListItem', goatListItemComponent);

export default goatListItemModule;
