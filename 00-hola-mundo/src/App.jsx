import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'asepur',
        name: 'Andrés Sepúlveda',
        isFollowing: false
    },
    {
        userName: 'oscar_fdez',
        name: 'Óscar Fdez',
        isFollowing: false
    },
    {
        userName: 'abeleira',
        name: 'Sara Abelleira',
        isFollowing: true
    }
]

export function App () {
    

    return (
        <section className="App">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
         
    )
}