import { sleep, check, group } from 'k6';
import { getAddresses } from './api/address.js';
import { getPlaces } from './api/places.js';
import { getProducts } from './api/products.js';

// Determine which configuration to use based on an environment variable
const testType = 'smoke';
let options;

switch (testType) {
  case 'smoke':
    options = require('./configs/smoke.js').options;
    break;
  case 'load':
    options = require('./configs/load.js').options;
    break;
  default:
    options = require('./configs/smoke.js').options;
}

// Set the options for this test
export { options };

export default function() {
  group('validate address', function() {
    const addressRes = getAddresses();
    check(addressRes, { 'address status should be 200': (r) => r.status == 200 });
    sleep(1);
  });

  group('validate places', function() {
  const placesRes = getPlaces();
  check(placesRes, { 'places status should be 200': (r) => r.status == 200 });
  sleep(1);
  });

  group('validate products', function() {
    const productsRes = getProducts();
    check(productsRes, { 'products status should be 200': (r) => r.status == 200 });
    sleep(1);
  });
}

