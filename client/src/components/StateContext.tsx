import React, { Dispatch, SetStateAction } from 'react';
import { useState, createContext } from 'react';

export interface State{
  isAuthorized: boolean,
  roomname: string | null,
  password: string | null,
  navigation: number,
  isLogin: boolean,
  video: File | null,
  subtitles: File | null,
  isConfigured: boolean
}

const DEFAULT_STATE: State = {
  isAuthorized: false, // true if user is authorized
  roomname: null,
  password: null,
  navigation: 0,
  isLogin: true,
  video: null,
  subtitles: null,
  isConfigured: false
}

// create a context tracking user authorization
const StateContext = createContext<(State | Dispatch<SetStateAction<State>>)[]>([]);

const StateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<State>(DEFAULT_STATE);
  return(
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
