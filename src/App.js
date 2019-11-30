import React, { Component } from 'react'
import Profile from './Profile'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [
                {
                    name: "Alexander Nortung", 
                    github: {
                        link: "https://github.com/Alexnortung"
                    },
                },
            ],
        }
    }
    render(){
        return (
            <div className="App">
                <div className="wrapper">
                    <h1>░▒▓こんにちは  HELLO▓▒░</h1>
                    <button className="button button-block">Aaayy</button>
                </div>
                <div className="wrapper">
                    {
                        this.state.profiles.map((profile, i) => {
                            return (
                                <Profile profile={profile} key={i} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App
