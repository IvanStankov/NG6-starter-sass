class GoatsListingController {
  constructor(GoatsService) {
    "ngInject";

    this.GoatsService = GoatsService;

    this.goatsList = [];
  }

  $onInit() {
    this.goatsList = this.GoatsService.getGoats();
  }
}

export default GoatsListingController;
