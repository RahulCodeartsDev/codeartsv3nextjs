
import { useState } from 'react'
import Link from 'next/link'
import RightSideBar from './RightSideBar'
import Menu from './Menu'

const Header = ({headerData})=> {
    const [click,setclick]= useState(false);
    const menuclick = ()=> setclick(!click);

    const [MobileClick, setMobileClick]= useState(false);
    const mobilemenuClick = ()=> setMobileClick(!MobileClick);
    return (
      <>
        <div className={click ? 'cs-ovarlay cs-ovarlay_open' : 'cs-ovarlay' } onClick={()=>setclick(false)}></div>        
        <div className={click ? 'cs-company_info_right_panel cs-company_info_right_panel_open' : 'cs-company_info_right_panel'}>
            <RightSideBar headerData={headerData} />
        </div>
        
        <header id="header">
            <div className="cs-container d-flex align-center justify-between">
               <Link href="/"><a className="cs-brand_logo"><img src={headerData[0].logo} alt={headerData[0].logoAlt}  /></a></Link>
                <div className="cs-header_right d-flex align-center">
                    <div className="cs-mobile_hamburger d-flex align-center" onClick={mobilemenuClick}>
                        <span></span>
                    </div>
                    <ul className="cs-menu d-flex align-center">
                        {
                            headerData[0].menuData.map((menudata,i)=>{
                            return(
                                 <Menu key={i} menudata={menudata} />
                                )
                            })  
                        }
                    </ul>               
                    <div className="cs-icon_back d-flex align-center">
                        <div className="cs-search d-flex align-center"><img src="../images/search.png" alt="" /></div>
                        <div className="cs-hamburger_menu d-flex align-center" onClick={menuclick}>
                            <span></span>
                        </div>
                    </div>                
                    <div className="cs-button">
                        <Link href={`/${headerData[0].buttonUrl}`}>
                            <a className="d-flex align-center justify-center white">{headerData[0].buttonName}</a>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className={MobileClick ? 'cs-mobile_menu cs-mobile_menu_open' : 'cs-mobile_menu'}>
                <div className="header d-flex align-center justify-between">
                   <Link href="/"><a className="cs-brand_logo"><img src={headerData[0].logo} alt="Codearts Solutions Pvt Ltd"  /></a></Link>
                    <div className="cross" onClick={()=>setMobileClick(false)}><img src="../images/close.png" alt="" /></div>
                </div>
                
                <ul className="cs-menu" onClick={mobilemenuClick}>
                    {
                        headerData[0].menuData.map((menudata,i)=>{
                        return(                               
                                <Menu key={i} menudata={menudata} />
                            )
                        })  
                    }
                </ul>
            </div>
        </header>
      </>
    )
}

export default Header

