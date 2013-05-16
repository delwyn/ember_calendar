// App.Serializer = DS.RESTSerializer.extend({
//   addAttributes: function(data, record) {
//     return record.eachAttribute((function(name, attribute) {
//       if (!attribute.options.readOnly) {
//         return this._addAttribute(data, record, name, attribute.type);
//       }
//     }), this);
//   }
// });

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.FixtureAdapter
  // adapter: DS.RESTAdapter.create({
  //   bulkCommit: false,
  //   serializer: App.Serializer
  // })
});
