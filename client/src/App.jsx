// import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUser from './Components/GetUser';
import CreateUser from './Components/CreateUser';
import RemoveUser from './Components/RemoveUser';

// create an instance of Apollo client
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});



function App() {

  return (
    //wrap app with ApolloProvider and pass in the previously defined client 
    <ApolloProvider client={client}>
      {" "}
      <h1>Create a new user</h1>
      <CreateUser />
      <h1>Get all users</h1>
      <GetUser/>
      <h1>Remove a user</h1>
      <RemoveUser/>
    </ApolloProvider>
   
  )
}

export default App;
