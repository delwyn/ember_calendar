App.Event = DS.Model.extend({
  summary: DS.attr('string'),
  description: DS.attr('string'),
  startsAt: DS.attr('date'),
  endsAt: DS.attr('date'),
  allDay: DS.attr('boolean'),
  important: DS.attr('boolean'),
  calendar: DS.belongsTo('App.Calendar'),

  // url: DS.attr('string', {
  //   readOnly: true
  // }),
  // color: DS.attr('string', {
  //   readOnly: true
  // }),
  // eventType: DS.belongsTo('App.EventType'),
  date: function() {
    if (this.get('startsAt')) {
      return moment(this.get('startsAt')).format('YYYY-MM-DD');
    }
  }.property('startsAt')
  // icon: (function() {
  //   if (this.get('important')) {
  //     return "<i class='icon-flag icon-white'></i>";
  //   } else {
  //     return '';
  //   }
  // }).property('important'),
  // changeDate: function(date) {
  //   var d, m, y, _ref;
  //   _ref = [date.year(), date.month(), date.date()], y = _ref[0], m = _ref[1], d = _ref[2];
  //   this.set('startsAt', new Date(moment(this.get('startsAt')).year(y).month(m).date(d)));
  //   if (this.get('endsAt')) {
  //     this.set('endsAt', new Date(moment(this.get('endsAt')).year(y).month(m).date(d)));
  //   }
  //   return this.store.commit();
  // }
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
