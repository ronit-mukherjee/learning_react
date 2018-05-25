import React from 'react'

const TeamMember = ({data,likeMember,dislikeMember}) => (
    <div className="team-member row">
        <div className="col-sm-2 member-image">
            <img src="images/icon-user-default.png" alt="user default" />
        </div>
        <div className="col-sm-10">
            <div className="row">
                <div className="col-sm-12 member-name">
                    {data.name}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 member-personal-details">
                    <span>{data.country}</span>, <span>{data.age}</span>, <span>{data.gender}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 actions">
                    <span>{data.likes} <i className="fas fa-thumbs-up" onClick={likeMember}></i></span>
                    <span>{data.dislikes} <i className="fas fa-thumbs-down" onClick={dislikeMember}></i></span>
                    <span>{data.comments} <i className="fas fa-comment-alt"></i></span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 member-bio">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 member-social-icons">
                    <span><i className="fab fa-facebook-square fb"></i></span>
                    <span><i className="fab fa-google-plus-square google"></i></span>
                    <span><i className="fab fa-instagram insta"></i></span>
                    <span><i className="fab fa-twitter-square twitter"></i></span>
                </div>
            </div>
        </div>
    </div>
)

export default TeamMember