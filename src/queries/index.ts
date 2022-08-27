import { gql } from '@apollo/client';

const INFO_PERSON = gql`
  query {
    characters {
      results {
        id
        name
        gender
        image
        species
        status
      }
    }
  }
`;

export default INFO_PERSON;