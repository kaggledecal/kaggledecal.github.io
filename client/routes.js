FlowRouter.route('/', {
    name: 'home',
    action(params) {
        BlazeLayout.render("homePage")
    }
});
FlowRouter.route('/about', {
  name: 'about',
  action(params, queryParams) {
    BlazeLayout.render("aboutPage")
  }
});
