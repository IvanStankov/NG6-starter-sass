import template from './goatListItem.html';
import controller from './goatListItem.controller';
import './goatListItem.scss';

let goatListItemComponent = {
  restrict: 'E',
  bindings: {
    goat: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default goatListItemComponent;
