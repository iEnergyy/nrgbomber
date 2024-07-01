import http from 'k6/http';
import { sleep, check } from 'k6';

// Determine which configuration to use based on an environment variable
const testType = 'smoke';
let options;

switch (testType) {
  case 'smoke':
    options = require('/configs/smoke.js').options;
    break;
  case 'load':
    options = require('./configs/load.js').options;
    break;
  default:
    options = require('./configs/smoke.js').options;
}

// Set the options for this test
export { options };

export default function () {
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
