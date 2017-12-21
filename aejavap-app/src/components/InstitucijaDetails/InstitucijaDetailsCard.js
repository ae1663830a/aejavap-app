import React from 'react'

const institucijaDetailsCard = (props) => {
    return (<tr>
        <td>{props.id}</td>
        <td>
            <img id="img" className="img-responsive" src={props.nuotrauka} alt={props.pavadinimas + " Nuotrauka"} title={props.pavadinimas}/>
        </td>
        <td>{props.pavadinimas}</td>
        <td>{props.autorius}</td>
        <td>
            <button id="buttonEdit" className="btn btn-success" onClick={props.detail}>Apie knyga</button>
        </td>

    </tr>)
};

export default institucijaDetailsCard;