import http from 'k6/http';

export function getAddresses() {
  return http.get('https://fakerapi.it/api/v1/addresses?_quantity=1');
}