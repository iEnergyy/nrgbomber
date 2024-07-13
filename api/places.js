import http from 'k6/http';

export function getPlaces() {
  return http.get('https://fakerapi.it/api/v1/places?_quantity=1');
}