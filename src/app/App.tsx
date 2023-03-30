import React, {useEffect} from 'react';
import './App.css';
import {Header} from "../features/Header/Header";
import {Main} from "../features/Main/Main";
import {useActions} from "../hooks/useAction";
import {asyncAppActions} from "./appSlice";
import {useAppSelector} from "../hooks/useAppSelector";
import CircularProgress from "@mui/material/CircularProgress";
import {selectIsInitialized} from "./app-seletors";

const App = () => {

    const isInitialized = useAppSelector(selectIsInitialized)

    const {initializeAppTC} = useActions(asyncAppActions)

   useEffect(() => {
        initializeAppTC()
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress style={{width: "80px", height: "80px"}}/>
        </div>
    }

  return (
    <div className="App">
       <Header/>
        <Main/>
    </div>
  );
}

export default App;
