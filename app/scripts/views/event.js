App.EventView = Em.View.extend(DragNDrop.Dragable, {
  attributeBindings: ['style'],
  classNames: ['cal-event'],
  templateName: 'event',

  // draggable: (function() {
  //   if (App.currentUser.get('internal')) {
  //     return 'true';
  //   } else {
  //     return 'false';
  //   }
  // }).property(),

  // click: function() {
  //   return window.location.href = this.content.get('url') + '?sender=' + window.location.pathname;
  // },

  style: (function() {
    var color = this.get('content.calendar.color');

    if (color) {
      return 'background-color:' + color;
    } else {
      return false;
    }
  }).property('content.calendar.color')
});
