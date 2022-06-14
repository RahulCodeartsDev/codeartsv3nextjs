import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
const Menu = ({menudata})=>{
    
    

    const [MobileClick, setMobileClick]= useState(false);
    const mobilemenuClick = ()=> setMobileClick(!MobileClick);

    const router = useRouter();
    function isActive(route){
        if(route==router.pathname){
            return "active"
        }else{
            ""
        }
    }
    return(
        <>
            <li onClick={mobilemenuClick} className={isActive(menudata.navurl)}>
                <Link href={menudata.navurl}>
                    <a>{menudata.navname} <i class={`fas ${menudata.icon}`}></i></a>                                            
                </Link>
                <ul className="cs-sub_menu">
                    {
                        menudata.submenu.map((subitem,i)=>{
                            return(
                                <li key={i}>
                                    <Link href={subitem.subnavurl}>
                                        <a>{subitem.subnavname}</a>                                            
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        </>
    )
}

export default Menu