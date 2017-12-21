import React from 'react'
import InstitucijaCard from '../InstitucijaCard/InstitucijaCard'

const institucijaList = (props) => {
    const institucijos = props.institucijosList;
    const institucijosList = institucijos.map((institucija, index) =>
        <InstitucijaCard
            key={institucija.id}
            pavadinimas={institucija.title}
            miestas={institucija.city}
            nuotrauka={institucija.image}
            kategorija={institucija.category}
            details={() => props.detail(index)}
        />
    );
    return (
        <div className="row">
            {institucijosList}
        </div>
    )
};

export default institucijaList;