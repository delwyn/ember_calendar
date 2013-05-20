App.MonthController = Ember.Controller.extend({
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  allEvents: null,
  calendars: null,

  events: (function() {
    var filters = this.get('filters');

    if (!this.get('calendars').get('isLoaded')) {
      return this.get('allEvents');
    }

    return this.get('allEvents').filter(function(item, index) {
      return ~filters.indexOf(item.get('calendar.id'));
    });
  }).property('allEvents.@each', 'filters.@each'),

  filters: (function() {
    return this.calendars.mapProperty('id');
  }).property('calendars.@each'),

  title: function() {
    return moment(this.date).format('MMMM YYYY');
  }.property('date'),

  days: function() {
    return this.get('range').map(function(date) {
      return App.Day.create({ date: date });
    });
  }.property('date'),

  weeks: function() {
    return this.get('days').inGroupsOf(7);
  }.property('days'),

  start: function() {
    return moment(this.date).clone().startOf('month').day(0);
  }.property('date'),

  end: function() {
    return moment(this.date).clone().endOf('month').day(6);
  }.property('date'),

  range: function() {
    var dates = [],
        next  = this.get('start').clone(),
        end   = this.get('end').clone();

    while (next <= end) {
      dates.push(next.clone());
      next.add('days', 1);
    }
    return dates;
  }.property('date'),

  today: function() {
    if (this.get('date').format('YYYY-MM') !== moment().format('YYYY-MM')) {
      this.transitionToRoute('month', moment().format('YYYY-MM'));
    }
  },

  nextMonth: function() {
    this.transitionToRoute('month', moment(this.get('date')).add('months', 1).format('YYYY-MM'));
  },

  previousMonth: function() {
    this.transitionToRoute('month', moment(this.get('date')).add('months', -1).format('YYYY-MM'));
  }
});
