// import React from "react";

function Card(props) {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                   <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p><a href={props.link} target="_blank" rel="noopener noreferrer">Link</a></p>
                    <p><a href={props.git} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
            </div>
        </div>
    );
}

export default Card;
