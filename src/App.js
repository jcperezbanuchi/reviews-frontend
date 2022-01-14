import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

const client = new ApolloClient({
	uri: "https://gaming-reviews-backend.herokuapp.com/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<Router>
			<ApolloProvider client={client}>
				<div className="App">
					<SiteHeader />
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						<Route
							path="/details/:id"
							element={<ReviewDetails />}
						/>
						<Route path="/category/:id" element={<Category />} />
					</Routes>
				</div>
			</ApolloProvider>
		</Router>
	);
}

export default App;
