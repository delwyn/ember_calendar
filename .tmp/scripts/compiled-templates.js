Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["day"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n    ");
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.EventView", {hash:{
    'contentBinding': ("event")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n    <div class='toggle hide'>\n      ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "event", "in", "weekDay.otherEvents", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class='toggle-buttons center'>\n      <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggle", "weekDay", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" href='#' class=\"btn btn-info btn-tiny toggle inline\">\n        <i class=\"icon-angle-down icon-white\"></i> More\n      </a>\n      <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggle", "weekDay", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" href='#' class=\"btn btn-info btn-tiny toggle hide\">\n        <i class=\"icon-angle-up icon-white\"></i> Less\n      </a>\n    </div>\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n        ");
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.EventView", {hash:{
    'contentBinding': ("event")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<div ");
  hashTypes = {'class': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("weekDay.dateStr")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  <div class='day'>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dayOfMonth", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n\n  ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "event", "in", "events", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "weekDay.otherEvents", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression;


  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "event.icon", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.summary", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n  <li>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n");
  return buffer;
  }

  data.buffer.push("<ul>\n");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["month"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n        <li>\n        <label class='checkbox inline'>\n          ");
  hashTypes = {'contentBinding': "STRING",'checked': "STRING"};
  stack1 = helpers.view.call(depth0, "App.EventTypeFilterCheckbox", {hash:{
    'contentBinding': ("this"),
    'checked': ("true")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </label>\n      </li>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push(" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n              <th>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "day", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n            <tr>\n              ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "day", "in", "week", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </tr>\n          ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, options;
  data.buffer.push("\n                ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "day", "day", options) : helperMissing.call(depth0, "render", "day", "day", options))));
  data.buffer.push("\n              ");
  return buffer;
  }

  data.buffer.push("<div class='calendar span12'>\n  <header>\n    <div class=\"span4\">\n      <nav>\n        <div class=\"btn-toolbar navigation-buttons\">\n          <div class=\"btn-group\">\n            <button ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousMonth", {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-mini\"><i class=\"icon-arrow-left\" ></i></button>\n            <button ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextMonth", {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data})));
  data.buffer.push("     class=\"btn btn-mini\"><i class=\"icon-arrow-right\"></i></button>\n          </div>\n          <button ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "today", {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data})));
  data.buffer.push("class=\"btn btn-mini\"><i class='icon-calendar'></i> Today</button>\n          <button ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "export", {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data})));
  data.buffer.push("class=\"btn btn-mini\"><i class='icon-calendar'></i> Export</button>\n        </div>\n      </nav>\n    </div>\n\n    <div class=\"span8 center\">\n      <h2>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n    </div>\n  </header>\n\n  <section>\n    <div class=\"span12\">\n      <ul class=\"inline\">\n      ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "eventTypes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"span12\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "day", "in", "weekdays", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </tr>\n        </thead>\n        <tbody>\n          ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "week", "in", "weeks", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n      </table>\n    </div>\n  </section>\n\n</div>");
  return buffer;
  
});