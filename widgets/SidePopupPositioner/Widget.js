define(["dojo/_base/declare"], function(declare){
  return declare(null, {
    constructor: function(options){
      this.mapView = options.mapView;
    },

    startup: function(){
      // Переопределяем позицию окна при открытии
      const mapView = this.mapView;
      if(mapView && mapView.popup){
        mapView.popup.on("open", function(event){
          event.container.style.left = "10px";
          event.container.style.top = "50%";
          event.container.style.transform = "translateY(-50%)";
        });
      }
    }
  });
});