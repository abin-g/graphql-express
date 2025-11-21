import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import './App.css'

const GET_SAMPLE = gql`
query FetchUsers{
users{
id,
name
}
}`

function App() {
  const { data, loading, error } = useQuery(GET_SAMPLE);

  console.log({ data, loading, error });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
