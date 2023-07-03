import { useState } from "react"

export function TwitterFollowCard ({children, userName, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName= isFollowing 
    ? 'sh-followCard-button is-Following'
    :'sh-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)

    }
    return (
        //estilos en React
        <article className='sh-followCard'>
            <header className='sh-followCard-header'>
                <img 
                className='sh-followCard-avatar' 
                alt="El avatar de shp" 
                src={`https://unavatar.io/${userName}`}/>
                <div className='sh-followCard-info'>
                    <strong >{children}</strong>
                    <span className='sh-followCard-infoUserName'>@{userName}</span>
                </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {text}
                    </button>
                </aside>
        </article>
    )
}