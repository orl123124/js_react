import { useState } from 'react'
 

export default function TwitterFollowerCard({userName ='unknow', children, initIsFollowing }){

    const [isFollowing, setisFollowing] = useState(initIsFollowing);//! hook


    const v_username = `https://unavatar.io/${userName}`
    const text = isFollowing? 'siguiendo': 'seguir'
    const buttonClassName = isFollowing? 'class-btn-siguiendo': 'class-btn-seguir'
    
    const handleClick = ()=>{ setisFollowing(!isFollowing) }
    
    
return(<article>
    <header>
         <img alt="avatar" src={v_username}></img>
           <div>
             <strong>{children}</strong>
             <span>@{userName}</span>
           </div>
    </header>
    <aside>
 <button className={buttonClassName} onClick={handleClick}>{text}</button>
    </aside>
    </article>)

}