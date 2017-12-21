import React from 'react'

const InstitucijaCreate = (props) => {

    const style = {
        width: '150px',
        marginTop: '5px',
        marginBottom: '5px'
    };

    return (
        <div>
            <form onSubmit={props.submitData}>
                <div className="form-group">
                    <label>Pavadinimas</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Institucijos pavadinimas"
                           key={props.id}
                           value={props.pavadinimas}
                           onChange={props.onFieldChange('pavadinimas')}/>
                </div>
                <div className="form-group">
                    <label>Miestas</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Institucijos miestas"
                           value={props.miestas}
                           onChange={props.onFieldChange('miestas')}/>
                </div>
                <div className="form-group">
                    <label>Kategorija</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Institucijos kategorija"
                           value={props.kategorija}
                           onChange={props.onFieldChange('kategorija')}/>
                </div>
                <div className="form-group">
                    <label>Nuotrauka</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Institucijos nuotrauka"
                           value={props.nuotrauka}
                           onChange={props.onFieldChange('nuotrauka')}/>
                </div>
                <input style={style} type="submit" className="btn btn-success" value="Pridėti"/>
            </form>
            <button style={style} className="btn btn-warning" onClick={props.cancelCreate}>Atšaukti</button>
        </div>
    )
};

export default InstitucijaCreate;