import Head from 'next/head';
import { Suspense } from 'react';
import { graphql } from 'react-relay';
import {
  loadQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

export default function Home() {
  const data = usePreloadedQuery(RepositoryNameQuery, preloadedQuery);

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <div>
        <Head>
          <title>Relay + Next Playground</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Suspense fallback={'Loading...'}>
          <div className="App">
            <header className="App-header">
              <p>{data.repository.name}</p>
            </header>
          </div>
        </Suspense>
      </div>
    </RelayEnvironmentProvider>
  );
}
