import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import store from "./redux/store/store";
import Counter from "./Counter";
import UserInfo from "./UserInfo";
import AddEmployee from "./AddEmployee";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/addemp" element={<AddEmployee />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
