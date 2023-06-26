import NavBar from "@/scenes/navbar"

import {SelectedPage} from "@/shared/type.ts"

import {useEffect, useState } from "react";
import Home from "@/scenes/home";

function App() {
  const [selectedState,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage]=useState<boolean>(true)
  useEffect(()=> {
    const handleScroll = ()=> {if (window.scrollY == 0){
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
      
    }
    else{
      setIsTopOfPage(false)
    }
    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)  
  }
  }, [])
  return <div className="app bg-gray-20">
    <NavBar isTopOfPaage = {isTopOfPage} selectedState={selectedState} setSelectedState={setSelectedPage}></NavBar>
    <Home></Home>
  </div>;
}

export default App;
