(function(nx,global){

  var App = nx.declare({
    statics:{
      start:function(){
        return new App();
      }
    },
    methods:{
      init:function(){
        console.log('App start!',$(document).attr('title'));
      }
    }
  });


  //app start:
  var app = App.start();

}(nx,nx.GLOBAL));

