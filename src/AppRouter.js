import Auth from './auth'
import Main from './main'
import SharedNote from './SharedNote'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const AppRouter = ({isLoggedIn, userObj}) => {
  
    return(
      <Router>
        <Switch>
          <Route exact path='/notes/:id' component={SharedNote}>
          </Route>
          {isLoggedIn ? (
            <>
              <Route exact path=''>
                <Main userObj={userObj}/>
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
