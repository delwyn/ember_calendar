App.EventView = Em.View.extend(DragNDrop.Dragable, {
  attributeBindings: ['style'],
  classNames: ['cal-event'],
  templateName: 'event',

  style: (function() {
    var color = this.get('content.calendar.color');

    return color && 'background-color:' + color;
  }).property('content.calendar.color')
});
