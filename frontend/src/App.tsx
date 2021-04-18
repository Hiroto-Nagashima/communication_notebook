import './App.css';
import { TopPage } from './pages/Top';
import { RegistrationPage } from './pages/Registration';
import { LoginPage } from './pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
  {/* router関連のコンポーネントをBrowserRouterの中に全て記入 */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/">
            <TopPage/>
          </Route>
          <Route exact path="/registration">
            <RegistrationPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
