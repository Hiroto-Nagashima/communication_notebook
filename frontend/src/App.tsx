import './App.css';
import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
import { TopPage } from './pages/Top';
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
            <TopPage label="Topページです"/>
          </Route>
          <Route exact path="/registration">
            <RegistrationPage label="登録画面です"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
