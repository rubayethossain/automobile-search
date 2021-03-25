import Layout from "containers/Layout/Layout";
import "./App.css";
import AppRouter from "./Router";

function App() {
  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
