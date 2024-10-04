import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        slug
        content
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
    }
  }
`;

export const GET_PAGES = gql`
  query GetPages {
    pages {
      nodes {
        id
        title
        slug
        content
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      id
      pageId
      title
      content
      slug
      date
      uri
    }
  }
`;

export const GET_PAGE_BY_ID = gql`
  query GetPageById($id: ID!) {
  page(id: $id, idType: URI) {
      id
      pageId
      title
      content
      slug
      date
      uri
    }
  }
`;