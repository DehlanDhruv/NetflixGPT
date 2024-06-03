import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";

function App() {

  return (
    <Provider store={appStore}>
      <div> 
        <Body/> 
      </div>
    </Provider> 
  );
}

export default App;
