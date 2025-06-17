require(['esri/views/MapView', 'esri/Map', 'widgets/SidePopupPositioner/Widget'], function(MapView, Map, SidePopupPositioner){
  // Создаем карту и привязываем её к контейнеру
  let map = new Map();
  let mapView = new MapView({
    container: "map-view",
    map: map
  });

  // Инициализируем виджет и передаем ему карту
  new SidePopupPositioner({
    mapView: mapView
  }).startup();
});