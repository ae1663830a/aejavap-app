import React from 'react'

const institucijaCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="thumbnail" id="thumbnail" >
                <img src={props.nuotrauka} id="institucijaCard" alt="..."/>
                <div className="caption">
                    <h3>{props.pavadinimas}</h3>
                    <p>{props.miestas}</p>
                    <p>{props.kategorija}</p>
                    <p>
                        <button className="btn btn-danger" onClick={props.detail}>Details</button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default institucijaCard;