import PageRoutes from "./routes/Routes";
import { CartContextProvider } from "./Context/CartContextProvider";

const App = () => (
  <CartContextProvider>
    <PageRoutes />
  </CartContextProvider>
);

export default App;
