import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 1,
  // A string specifying the total duration of the test run.
  duration: '10s',
};

export default function() {
  const addressRes = http.get('https://fakerapi.it/api/v1/addresses?_quantity=1');
  check(addressRes, { 'address status was 200': (r) => r.status == 200 });
  sleep(1);
  const placesRes = http.get('https://fakerapi.it/api/v1/places?_quantity=1');
  check(placesRes, { 'places status was 200': (r) => r.status == 200 });
  sleep(1);
  const productsRes = http.get('https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid');
  check(productsRes, { 'products status was 200': (r) => r.status == 200 });
  sleep(1);
}
