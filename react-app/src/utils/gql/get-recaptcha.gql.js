import { gql } from 'urql';

const GET_RECAPTHCHA_QUERY = gql`
  query GetReCaptchaV3Config {
    recaptchaV3Config {
      website_key
      badge_position
      language_code
      forms
      __typename
    }
  }
`;

export default GET_RECAPTHCHA_QUERY;
