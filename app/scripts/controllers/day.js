Calendar.DayController = Ember.Object.extend({
  monthEventsBinding: 'target.events',

  events: function() {
    var date = this.get('model.date').format('YYYY-MM-DD'),
        events = this.get('monthEvents');

    if (!events) {
      return;
    }

    events = events.filter(function(item, index) {
      return item.get('date') === date;
    });

    return events;
  }.property('monthEvents.@each'),

  dayOfMonth: function() {
    return this.get('model.date').date();
  }.property()
});
