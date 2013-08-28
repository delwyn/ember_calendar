Calendar.Calendar = DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string')
});

Calendar.Calendar.FIXTURES = [
  { id: 1, name: 'Home', color: 'green' },
  { id: 2, name: 'Work', color: 'red' }
];
