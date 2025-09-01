import { createContext, useContext, useState } from "react";
const NotesContext = createContext();

export const NotesContextProvider = function({children}) {
    const [timer, setTimer] = useState(0)
    return <NotesContext.Provider value={{timer, setTimer}}>
        {children}
    </NotesContext.Provider>
}
export const UseNotesContext = ()=> useContext(NotesContext);
