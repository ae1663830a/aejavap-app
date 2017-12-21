import React from 'react'
import InstitucijaAdminCard from './InstitucijaDetailsCard'

const institucijaAdminList = (props) => {
    const knygos = props.institucijosKnygos;

    if (knygos.length === 0) {
        return <div><h1>Loading</h1></div>
    }
    const listItems = knygos.map((knyga, index) =>
        <InstitucijaAdminCard
            id={knyga.id}
            key={knyga.id}
            image={knyga.nuotrauka}
            title={knyga.pavadinimas}
            author={knyga.autorius}
            details={() => props.detail(index)}
        />
    );
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Knygos ID</th>
                    <th>Nuotrauka</th>
                    <th>Pavadinimas</th>
                    <th>Knygos detales</th>
                </tr>
                </thead>
                <tbody>{listItems}</tbody>
            </table>
        </div>
    )
};

export default institucijaAdminList;