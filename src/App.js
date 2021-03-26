import Layout from "containers/Layout/Layout";
import { CurrencyProvider } from "contexts";
import "./App.css";
import AppRouter from "./Router";

function App() {
  return (
    <div className="App">
      <CurrencyProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </CurrencyProvider>
    </div>
  );
}

export default App;
