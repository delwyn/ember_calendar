/*global Ember */

// (function (window) {

Array.prototype.inGroupsOf = function(groupSize, func) {
  var array = this;
  var groups = [];

  for(var i=0; i<array.length; i += groupSize) {
    group = array.slice(i, i + groupSize)
    groups.push(group);

    if (typeof func === 'function') {
      func(group);
    }

  }
  return groups;
}

DragNDrop = Ember.Namespace.create();

DragNDrop.cancel = function(e) {
  e.preventDefault();
  return false;
};

DragNDrop.Dragable = Ember.Mixin.create({
  attributeBindings: 'draggable',
  draggable: 'true',
  dragStart: function(e) {
    return e.dataTransfer.setData('Text', this.get('elementId'));
  }
});

DragNDrop.Droppable = Ember.Mixin.create({
  dragEnter: DragNDrop.cancel,
  dragOver: DragNDrop.cancel,
  drop: DragNDrop.cancel
});


App.Day = Ember.Object.extend({
    date: null,
    day: function() {
      return this.get('date').date();
    }.property('date')
})


// App.DayController = Ember.Object.extend({
//   date: null,
//   day: function() {
//     return 'xxx';
//   }.property('date')
// });

// })(this);