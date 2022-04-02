export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  getMarkerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const element = document.getElementById(divId)!;
    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.getMarkerContent(),
    });

    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
