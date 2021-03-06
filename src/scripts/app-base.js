(function (nx, global) {

  var AppBase = nx.declare('dc.qunpai.AppBase', {
    statics: {
      start: function () {
        return new App();
      }
    },
    methods: {
      bindings: {},
      init: function () {
        this.elements();
        this.events();
      },
      elements: function () {
      },
      events: function () {
        var self = this;
        var bindings = this.bindings;
        nx.each(bindings, function (value, key) {
          if (key !== '__base__') {
            var names = key.split('::');
            $(names[0]).on(names[1], function (event) {
              self[value](event);
            });
          }
        });
      }
    }
  });

}(nx, nx.GLOBAL));

