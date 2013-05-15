App.Router.reopen({
  // location: 'history'
});

App.Router.map(function() {
  this.resource('month', { path: 'month/:date' })
});

App.MonthRoute = Ember.Route.extend({
  model: function(params) {
    return moment(params.date);
  },

  setupController: function(controller, model) {
    controller.set('date', moment(model));
    controller.set('events', App.Event.find());
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('month', moment().format('YYYY-MM'));
  }
});
