import "bootstrap";
import toggleDateInputs from "../plugins/flatpickr";
toggleDateInputs();
import "plugins/flatpickr";
import "../bookings.js";

import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox } from '../plugins/init_mapbox';

initMapbox();
