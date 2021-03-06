import GoatListItemModule from './goatListItem'
import GoatListItemController from './goatListItem.controller';
import GoatListItemComponent from './goatListItem.component';
import GoatListItemTemplate from './goatListItem.html';

describe('GoatListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GoatListItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GoatListItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(GoatListItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GoatListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GoatListItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GoatListItemController);
      });
  });
});
