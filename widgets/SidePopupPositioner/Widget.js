define([
  "dojo/_base/declare",
  "esri/views/MapView",
  "esri/Map"
], function(declare, MapView, Map){
  return declare(null, {
    constructor: function(options){
      // Создаем карту и MapView внутри виджета
      let map = new Map(); // Создаем новую карту
      this.mapView = new MapView({
        container: document.getElementById('map-view'), // Привязываем к div-контейнеру с ID "map-view"
        map: map                   // Устанавливаем нашу карту
      });

      // Меняем позицию pop-up окна при его открытии
      this.mapView.popup.on("open", function(event){
        event.container.style.left = "10px";               // Левого отступа 10 пикселей
        event.container.style.top = "50%";                 // Центруем по вертикали
        event.container.style.transform = "translateY(-50%)"; // Центрирование через translate
      });
    },

    startup: function(){
      // Любые начальные действия виджета
    },

    destroy: function(){
      // Освобождаем ресурсы при уничтожении виджета
      if(this.mapView){
        this.mapView.destroy();
      }
    }
  });
});