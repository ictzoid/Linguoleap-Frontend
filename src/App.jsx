import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>

      <SignUp />
      <ToastContainer />
    </>
  );
}

export default App;
