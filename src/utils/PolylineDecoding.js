// src/utils/PolylineDecoding.js
import { decode } from '@googlemaps/polyline-codec';

export const decodePolyline = (encodedPolyline) => {
  return decode(encodedPolyline);
};
