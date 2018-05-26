import React, {Component} from 'react'

import './OurTeam.css'

import TeamData from '../../team-data'

import TeamMember from '../TeamMember/TeamMember'

export default class OurTeam extends Component {
    state = {
        team_members: []
    }

    componentWillMount() {
        this.setState({
            team_members: TeamData
        })
    }

    likeMember(id){
        let teamMembers = [...this.state.team_members].map((member,i)=>
            member.id === id ?
                {...member, likes: ++member.likes}:
                member
        )

        this.setState({
            team_members: teamMembers
        })
    }

    dislikeMember(id){
        let teamMembers = [...this.state.team_members].map((member,i)=>
            member.id === id ?
                {...member, dislikes: ++member.dislikes<0?0:member.dislikes}:
                member
        )

        this.setState({
            team_members: teamMembers
        })
    }

    render() {
        return (
            <div id={"our-team"} className={"row"}>
                <div className="row">
                    <h2 className="col-sm-12">Our Team</h2>
                    <p className="col-sm-12 page-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="col-sm-12 team-member-list">
                        {
                            this.state.team_members.map((team, i) => (
                                <TeamMember data={team} key={team.id} likeMember={()=>this.likeMember(team.id)} dislikeMember={()=>this.dislikeMember(team.id)} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

