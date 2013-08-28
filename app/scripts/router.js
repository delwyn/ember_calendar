Calendar.Router.reopen({
  // location: 'history'
});

Calendar.Router.map(function() {
  this.route('month', { path: 'month/:date' });
});

Calendar.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('month', moment().format('YYYY-MM'));
  }
});

Calendar.MonthRoute = Ember.Route.extend({
  model: function(params) {
    return params.date;
  },

  setupController: function(controller, model) {
    controller.set('date', moment(model, 'YYYY-MM'));
    controller.set('calendars', Calendar.Calendar.find());
    controller.set('allEvents', Calendar.Event.find());
  }
});
