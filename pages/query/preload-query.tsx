import RelayEnvironment from '../../RelayEnvironment';
import { graphql, QueryRenderer } from 'react-relay';
import {
  preloadQuery,
  preloadQueryResponse,
} from './__generated__/preloadQuery.graphql';

const Query = graphql`
  query preloadQuery {
    viewer {
      login
    }
  }
`;

const renderQuery = ({
  error,
  props,
}: {
  error: Error;
  props: preloadQueryResponse;
}) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <div>id: {props.viewer.login}</div>;
  }
  return <div>Loading</div>;
};

export default function PreloadedQuery() {
  return (
    <QueryRenderer<preloadQuery>
      environment={RelayEnvironment}
      query={Query}
      variables={{}}
      render={renderQuery}
    />
  );
}
