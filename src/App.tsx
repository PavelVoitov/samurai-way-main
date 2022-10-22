import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) =>  {

    const state = props.store.getState()

  return (

          <div className="appwrapper">
              <Header />
              <Navbar state={state.sidebar}/>
              {/*<Profile />*/}
              <div className='appWrapperContent'>
                  <Route path={'/dialogs'} render={() => <Dialogs store={props.store}
                                                                  dispatch = {props.store.dispatch.bind(props.store)} />}/>
                  <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage}
                                                                  dispatch = {props.store.dispatch.bind(props.store)}
                                                                  />}
                  />
                  <Route path={'/news'} render={() => <News />}/>
                  <Route path={'/music'} render={() => <Music />}/>
                  <Route path={'/settings'} render={() => <Settings />}/>
              </div>
          </div>

  );
}

export default App;
