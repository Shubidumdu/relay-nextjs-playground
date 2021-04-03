import fetchGraphQL from '../../fetchGraphQL';

export default function PreloadedQuery({ data }) {
  return <div>ID: {data.viewer.login}</div>;
}

export async function getStaticProps(context) {
  const { data } = await fetchGraphQL(`query preloadQuery {
    viewer {
      login
    }
  }`);

  return {
    props: {
      data,
    },
  };
}
