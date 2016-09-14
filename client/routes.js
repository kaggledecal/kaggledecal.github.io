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
FlowRouter.route('/login', {
    name: 'login',
    triggersEnter: [function() {
        // if Meteor.
    }],
    action(params, queryParams) {
        // if
        BlazeLayout.render("loginPage")
    }
});
// const loggedIn = FlowRouter.group({
//   triggersEnter: [ function() {
//       // actions to take if user is not logged in
//       if (!(Meteor.loggingIn() || Meteor.userId())) {
//         let route = FlowRouter.current();
//         if (route.route.name !== 'login') {
//           Session.set('redirectAfterLogin', route.path);
//         }
//         return FlowRouter.go('login');
//       }
//     }
//   ]
// });

// ---
