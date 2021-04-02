async function fetchGraphQL(text, variables = {}) {
  const GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
