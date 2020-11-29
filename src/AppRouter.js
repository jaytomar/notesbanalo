import Auth from './auth'
import Main from './main'
import SharedNote from './SharedNote'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react'

const AppRouter = ({isLoggedIn, userObj}) => {
  const[isNewUser, setIsNewUser]=useState(false);
    return(
      <Router>
        <Switch>
          <Route path='/notes/:id' component={SharedNote}>
          </Route>
          {isLoggedIn ? (
            <>
              <Route exact path='/'>
                <Main userObj={userObj} isNewUser={isNewUser}/>
              </Route>
            </>
          ):(
            <Route exact path='/'>
              <Auth setIsNewUser={setIsNewUser}/>
            </Route>
            )
          }

        </Switch>
      </Router>
 
    );
}


export default AppRouter;
