import { Router, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home"
import history from './util/history'

const Routes = () => {
    return (
      <BrowserRouter>
        <Route path="/">
          <Home/>
        </Route>
      
      </BrowserRouter>
    )
}