App.DayView = Em.View.extend(DragNDrop.Droppable, {
  tagName: 'td',
  classNames: ['date'],
  classNameBindings: ['isToday', 'isWeekend'],
  templateName: 'day',

  isToday: function() {
    return moment().format('YYYY-MM-DD') === this.content.get('date').format('YYYY-MM-DD');
  }.property(),

  isWeekend: function() {
    return this.content.get('date').day() % 6 === 0;
  }.property(),

  dragEnter: function(e) {
    var el;
    el = $(e.target);
    if (el.is('td.date') || (el = $(el).parents('td.date'))) {
      $('td.date.dropTarget').removeClass('dropTarget');
      return el.addClass('dropTarget');
    }
  },
  
  drop: function(e) {
    var date, event, view, viewId;
    $('td.date.dropTarget').removeClass('dropTarget');
    viewId = e.dataTransfer.getData('Text');
    view = Ember.View.views[viewId];
    event = view.get('content');
    date = this.content.get('date');
    if (event.get('date') !== date.format('YYYY-MM-DD')) {
      event.changeDate(date);
      view.destroy();
    }
    return this._super(e);
  }
});