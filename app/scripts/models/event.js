App.Event = DS.Model.extend({
  summary: DS.attr('string'),
  description: DS.attr('string'),
  startsAt: DS.attr('date'),
  endsAt: DS.attr('date'),
  // allDay: DS.attr('boolean'),
  // important: DS.attr('boolean'),
  calendar: DS.belongsTo('App.Calendar'),

  date: function() {
    if (this.get('startsAt')) {
      return moment(this.get('startsAt')).format('YYYY-MM-DD');
    }
  }.property('startsAt'),

  // icon: (function() {
  //   if (this.get('important')) {
  //     return "<i class='icon-flag icon-white'></i>";
  //   } else {
  //     return '';
  //   }
  // }).property('important'),

  changeDate: function(date) {
    var d = date.date(),
        m = date.month(),
        y = date.year();

    this.set('startsAt', moment(this.get('startsAt')).year(y).month(m).date(d).toDate());

    if (this.get('endsAt')) {
      this.set('endsAt', moment(this.get('endsAt')).year(y).month(m).date(d).toDate());
    }

    this.store.commit();
  }
});

App.ramdomDay = function(maxDaysFromToday) {
  var daysFromToday = Math.floor(((Math.random() * 2 * maxDaysFromToday) + 1) - maxDaysFromToday);
  return moment().add('days', daysFromToday);
}

App.Event.FIXTURES = [
    {id: 1, summary: 'Meeting', startsAt: App.ramdomDay(7), calendar: 1 },
    {id: 2, summary: 'Party', startsAt: App.ramdomDay(7), calendar: 2 },
    {id: 3, summary: 'Meeting', startsAt: App.ramdomDay(7), calendar: 1 },
];
