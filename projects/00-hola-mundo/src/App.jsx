import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App(){
const [name, setName] = useState('shp981');

return(
    //forma de poner React.Fragment <> </>
    <section className='App'>
    <TwitterFollowCard  initialIsFollowing userName={name}>
    Sebastian Huertas Perez
    </TwitterFollowCard>
    <TwitterFollowCard userName="midudev" >
    Miguel Angel Durán
    </TwitterFollowCard>
    <button onClick={ ()=> setName('sebas')}>
|   Cambio nombre
    </button>
    </section>
)
}