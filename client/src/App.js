import "./App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/Home/Home";
import TvShows from "./components/TvShows/TvShows";
import Movies from "./components/Movies/Movies";
import Kids from "./components/Kids/Kids";
import Welcome from "./components/Welcome/Welcome";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Condition from "./components/ExtraLinks/Condition";
import Help from "./components/ExtraLinks/Help";
import Privacy from "./components/ExtraLinks/Privacy";
import SpecificLanguage from "./components/ByLanguage/SpecificLanguage/SpecificLanguage";
import Movie from "./components/Movie/Movie";
import WatchTv from "./components/TV/WatchTv/WatchTv";
import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
import Feedback from "./components/Feedback/Feedback";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Watchlist from "./components/Watchlist/Watchlist";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"; // Importa o componente de proteção

// Importando contexto
import { UserInfoProvider } from "./UserContext";

const App = () => {
  return (
    <UserInfoProvider>
      <div className="app">
        <Router>
          <Switch>
            {/* Rotas públicas */}
            <Route path="/" exact component={Welcome} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/forgotpassword" exact component={Forgotpassword} />
            <Route path="/resetpassword/:token" exact component={ResetPassword} />

            {/* Rotas protegidas (Somente usuários logados) */}
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute path="/movies" exact component={Movies} />
            <ProtectedRoute path="/kids" exact component={Kids} />
            <ProtectedRoute path="/specificlanguage/:languageselected" exact component={SpecificLanguage} />
            <ProtectedRoute path="/watchmovie/:id" exact component={Movie} />
            <ProtectedRoute path="/watchtv/:tv_id" exact component={WatchTv} />
            <ProtectedRoute path="/watchlist" exact component={Watchlist} />
            <ProtectedRoute path="/tvshows" exact component={TvShows} />

            {/* Outras rotas públicas */}
            <Route path="/conditions" exact component={Condition} />
            <Route path="/help" exact component={Help} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="/feedback" exact component={Feedback} />

            {/* Página de erro para rotas inexistentes */}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </UserInfoProvider>
  );
};

export default App;
