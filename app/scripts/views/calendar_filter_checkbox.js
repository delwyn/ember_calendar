Calendar.CalendarFilterCheckbox = Em.Checkbox.extend({
  selectedBinding: 'controller.filters',

  click: function(e) {
    var checked, id, selected;

    id       = this.get('content').get('id');
    checked  = this.get('checked');
    selected = this.get('selected');

    if (checked) {
      return selected.pushObject(id);
    } else {
      return selected.removeObject(id);
    }
  }
});
