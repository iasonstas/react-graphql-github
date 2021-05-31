import { gql } from '@apollo/client';

export const LOAD_DATA = gql`
  query repositorySearch($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      id
      issues(last: 20) {
        totalCount
        edges {
          node {
            number
            title
            author {
              login
            }
            createdAt
            state
            comments(last: 20) {
              totalCount
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
      pullRequests(last: 20) {
        totalCount
        edges {
          node {
            id
            title
            author {
              login
            }
            comments(last: 20) {
              totalCount
              edges {
                node {
                  id
                }
              }
            }
            createdAt
            state
          }
        }
      }
      forks(last: 20) {
        totalCount
        edges {
          node {
            nameWithOwner
            description
            isPrivate
            stargazerCount
            createdAt
          }
        }
      }
      languages(last: 20) {
        totalCount
        totalSize
        edges {
          size
          node {
            id
            name
            color
          }
        }
      }
    }
  }
`;
