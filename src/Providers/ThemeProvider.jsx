"use client";
// context for theme
import { ThemeContext } from '../context/ThemeContext';
import { useContext , useState, useEffect} from 'react';


const ThemeProvider = ({children})=>{

 const { theme } = useContext(ThemeContext);
// console.log(theme);
 const [mounted, setMounted] = useState(false);

      useEffect(() => {
            setMounted(true);
      }
      , []);

      if(mounted){
            return (<div className={ theme }>{children}</div>
      
  )}
}

export default ThemeProvider;