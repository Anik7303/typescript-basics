// import { User } from "./User";
// import { Company } from "./Company";

const element = document.getElementById("map")!;

new google.maps.Map(element, {
  zoom: 3,
  center: {
    lat: 0,
    lng: 0,
  },
});
