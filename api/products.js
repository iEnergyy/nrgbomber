import http from 'k6/http';

export function getProducts() {
  return http.get('https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid');
}