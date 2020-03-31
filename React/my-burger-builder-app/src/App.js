import React from "react";

import Layout from "./components/Layouts/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <p>
          <BurgerBuilder></BurgerBuilder>
        </p>
      </Layout>
    </div>
  );
}

export default App;
