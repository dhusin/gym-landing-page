
import Logo from '@/assets/Logo.png'
import Link from './Link';
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from '@/shared/type';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';
type Props = {
    isTopOfPaage  : boolean;
    selectedState : SelectedPage;
    setSelectedState : (value: SelectedPage)=>void
}

const Navbar = ({isTopOfPaage, selectedState,setSelectedState}: Props) => {
    const flex_between = "flex items-center justify-between";
    const [isMenuToggled,setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navBg = isTopOfPaage ? "" : "bg-primary-100 drop-shadow"
    
    return (
    
    <nav>
        <div className={`${flex_between} fixed top-0 z-30 w-full py-6`}>
            <div className={`${navBg} ${flex_between} mx-auto w-5/6`}>
                <div className={`${flex_between} w-full gap-16 `}>
                    <img src={Logo} alt="Logo" />
                
                {isAboveMediumScreens ? (<div className={`${flex_between} w-full`}>
                    <div className={`${flex_between} gap-8 text-sm`}>
                        <Link page='Home' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                        <Link page='Benefits' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                        <Link page='Our Classes' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                        <Link page='Contact' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                    </div>
                    <div className={`${flex_between} gap-8`}>
                        <p>Sign in</p>
                        <ActionButton setSelectedPage={setSelectedState}>Become a Member</ActionButton>
                    </div>
                </div>) : 
                (
                    <button className='rounded-full bg-secondary-500 p-2' onClick={() =>setIsMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                )}
                </div>
            </div>
        </div>
        
        {isMenuToggled && !isAboveMediumScreens && (
            <div className=' fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                <div className='flex justify-end p-12'>
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className='h-6 w-6 text-gray-400'/>
                    </button>    
                </div> 
                <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                    <Link page='Home' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                    <Link page='Benefits' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                    <Link page='Our Classes' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                    <Link page='Contact' selectedPage={selectedState} setSelectedPage={setSelectedState}/>
                </div>               
            </div>
        )}
    </nav>
  )
}

export default Navbar