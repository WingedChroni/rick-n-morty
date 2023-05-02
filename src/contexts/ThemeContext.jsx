import {useState, createContext, useEffect} from 'react'

//create the state
export const ThemeContext = createContext ();

export default function ThemeContextProvider (props){
    //create my global state
    const [darkMode, setDarkMode] = useState(false);

    //check localStorage for initial state of darkmode
    //when context loads

    
    useEffect(()=>{
        console.log("context loaded")
        //is there a value in localstorage
        const storedDarkMode = localStorage.getItem("darkMode");
        console.log("value is ", storedDarkMode);
        if (storedDarkMode !== null){
            setDarkMode(JSON.parse(storedDarkMode))
        }
        //otherwise it uses the default value
    },[]) //runs when context loads

    //save darkmode state anytime it changes
    useEffect(()=>{
        console.log("darkmode toggled")
        //save current value to localstorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        
    }, [darkMode]) //runs when darkmode changes

    return(
        //double bracket because javascript object
        <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
            {props.children}
        </ThemeContext.Provider>
    
        )
}