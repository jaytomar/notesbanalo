import Auth from './auth'
import Main from './main'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

const AppRouter = ({isLogged, userObj}) => {
    return(
      <Router>
        <Switch>
          {isLogged ? (
            <>
              <Route exact path=''>
              <div className="">
              <Main userObj={userObj}/>
              </div>
              </Route>
            </>
          ):(
            <Route exact path=''>
              <Auth />
            </Route>
            )
          }
        </Switch>
      </Router>
 
    );
}


export default AppRouter;
