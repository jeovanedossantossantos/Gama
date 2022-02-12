
import Routes from "./routes";
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux'

import store from "./store";
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from "./styles/globalStyled"
function App() {
  return (

    <>
      <Provider store={store}>
        <ToastContainer />
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
