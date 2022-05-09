import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.CLIENT,
  apiKey: process.env.API_KEY,
});