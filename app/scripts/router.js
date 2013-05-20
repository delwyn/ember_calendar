App.Router.reopen({
  // location: 'history'
});

App.Router.map(function() {
  this.route('month', { path: 'month/:date' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('month', moment().format('YYYY-MM'));
  }
});

App.MonthRoute = Ember.Route.extend({
  model: function(params) {
    return params.date;
  },

  setupController: function(controller, model) {
    controller.set('date', moment(model, 'YYYY-MM'));
    controller.set('events', App.Event.find());
  }
});
