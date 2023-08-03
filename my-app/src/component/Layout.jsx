import { useEffect, useState } from "react"


function Layout() {
    const [onsamllScreen,setonsmallScreen]=useState(false);
    const checkScreenSize=()=>{
        setonsmallScreen (window.innerWidth < 768);
    }
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=>{window.removeEventListener('resize',checkScreenSize)}
    },[])
  return (
    <div>
        <h1>You use {onsamllScreen ? 'Small':'large'} screen go ahahed</h1>
    </div>
  )
}

export default Layout
