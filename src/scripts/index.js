(function (nx, global) {

  var App = nx.declare({
    extend: dc.qunpai.AppBase,
    statics: {
      start: function () {
        return new App();
      }
    },
    methods: {
      eventsMapping: {
        '.btn1::click': '_$btn1_click'
      },
      init: function () {
        this.base();
        this.method1();
      },
      method1:function(){
        $('.btn2').click(function(){
          console.log('1244');
        })
      },
      elements: function () {
        this._$btn1 = $('.btn1');
      },
      _$btn1_click: function (inEvent) {
        console.log(this, 'btn1 click', inEvent);
      }
    }
  });


  //app start:
  App.start();

}(nx, nx.GLOBAL));

