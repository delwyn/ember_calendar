App.DayView = Em.View.extend(DragNDrop.Droppable, {
  tagName: 'td',
  classNames: ['date'],
  classNameBindings: ['isToday', 'isWeekend'],
  templateName: 'day',

  dateBinding: 'controller.model.date',

  isToday: function() {
    return this.date && moment().format('YYYY-MM-DD') === this.date.format('YYYY-MM-DD');
  }.property('date'),

  isWeekend: function() {
    return this.date && this.date.day() % 6 === 0;
  }.property('date'),


  dragEnter: function(e) {
    var el = $(e.target);

    if (el.is('td.date') || (el = $(el).parents('td.date'))) {
      $('td.date.dropTarget').removeClass('dropTarget');
      return el.addClass('dropTarget');
    }
  },

  drop: function(e) {
    var event, view, viewId;

    $('td.date.dropTarget').removeClass('dropTarget');

    viewId = e.dataTransfer.getData('Text');
    view   = Ember.View.views[viewId];
    event  = view.get('content');

    if (event.get('date') !== this.date.format('YYYY-MM-DD')) {
      event.changeDate(this.date);
      view.destroy();
    }

    return this._super(e);
  }
});
