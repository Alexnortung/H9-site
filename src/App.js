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
                {
                    name: "Anders Kildemand", 
                    github: {
                        link: "https://github.com/gaprop"
                    },
                },
                {
                    name: "test", 
                    github: {
                        link: "https://github.com/test"
                    },
                },
                {
                    name: "test", 
                    github: {
                        link: "https://github.com/test"
                    },
                },
                {
                    name: "test", 
                    github: {
                        link: "https://github.com/test"
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
                    <div className="Profile-wrapper">
                        {
                            this.state.profiles.map((profile, i) => {
                                return (
                                    <Profile profile={profile} key={i} />
                                )
                            })
                        }
                        {
                            [...Array((this.state.profiles.length - 1) % 3)].map((u,i) => <Profile hidden="true" key={this.state.profiles.length + i} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App
