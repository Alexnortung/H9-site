import React, { Component } from 'react'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const {profile} = this.props
        const {github, name} = profile

        return (
            <div className="Profile">
                <div className="Profile__name">
                    {name}
                </div>
                <div>
                    <a href={github.link}>Github profil</a>
                </div>
            </div>
        )
    }
}

export default Profile
