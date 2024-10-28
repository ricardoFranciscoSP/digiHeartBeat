// lib/dataFetch.js
import { client } from './apollo';
import { GET_PAGE_BY_ID } from './queries';

export async function getPageData(id) {
  const response = await client.query({
    query: GET_PAGE_BY_ID,
    variables: { id },
  });
  return response?.data?.page;
}