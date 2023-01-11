function initMap() {
  // Map Options

  let options = {
    zoom: 13,
    center: { lat: 25.3344335, lng: 83.0112295 },
    // center: { lat: 25.3176, lng: 82.9739 },
  };

  // Map

  const location = new google.maps.Map(document.getElementById("map"), options);

  // Markers

  const svgMarker = {
    path: "M33 13.924C33 6.893 27.594 1 20.51 1S8 6.897 8 13.93C8 16.25 8.324 18 9.423 20h-.021l10.695 20.621c.402.551.824-.032.824-.032C20.56 41.13 31.616 20 31.616 20h-.009C32.695 18 33 16.246 33 13.924zm-18.249-.396c0-3.317 2.579-6.004 5.759-6.004 3.179 0 5.76 2.687 5.76 6.004s-2.581 6.005-5.76 6.005c-3.18 0-5.759-2.687-5.759-6.005z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    scale: 1.5,
  };

  const marker = new google.maps.Marker({
    position: { lat: 25.346185901776547, lng: 83.00942886904441 },
    // position: { lat: 25.3462881, lng: 83.007622 },
    map: location,
    icon: svgMarker,
  });

  // InfoWindow for office Address

  const addressWindow = new google.maps.InfoWindow({
    content: `<h4 class="heading-quad">New India Pest Control</h4>
    <address class="address-one">
      85-B Ashok Nagar Colony<br />
      Pandaypur, Varanasi UP 221007<br />
      India
    </address>`,
  });

  const addressPop = function () {
    addressWindow.open(map, marker);
  };

  marker.addListener("mouseover", addressPop, false);
  marker.addListener("click", addressPop, false);
  // marker.addListener("mouseover", () => {
  //   addressWindow.open(map, marker);
  // });
}
