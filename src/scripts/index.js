(function (nx, global) {

  nx.declare({
    extend: dc.qunpai.AppBase,
    statics: {
      //will auto run:
      init: function () {
        return new this();
      }
    },
    methods: {
      bindings: {
        '.btn1::click': '_btn1_click',
        '.btn2::click': '_btn2_click',
        '.btn3::click': '_btn3_click'
      },
      elements: function () {
        this._$btn1 = $('.btn1');
      },
      show: function(){
        console.log('====show something!======');
      },
      _btn1_click: function (inEvent) {
        console.log(this, 'btn1 click', inEvent);
      },
      _btn2_click: function(){
        console.log('just a btn click!');
      },
      _btn3_click: function(){
        console.log('call class method~');
        this.show();
      }
    }
  });

}(nx, nx.GLOBAL));

