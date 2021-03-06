import './App.css';
import { TopPage } from './pages/Top';
import { RegistrationPage } from './pages/Registration';
import { LoginPage } from './pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './provider/UserProvider';



function App() {
  return (
    <>
  {/* router関連のコンポーネントをBrowserRouterの中に全て記入 */}
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage/>
          </Route>
          <Route exact path="/top">
            <TopPage/>
          </Route>
          <Route exact path="/registration">
            <RegistrationPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
    </>
  );
}

export default App;
