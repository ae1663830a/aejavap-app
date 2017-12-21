import React, {Component} from 'react'
import InstitucijaCreate from '../../components/InstitucijaCreate/InstitucijaCreate'
import PropTypes from 'prop-types'
import axios from 'axios'
import Navbar from '../../components/Navigation/Navbar'
import {hashHistory} from 'react-router'

class InstitucijaCreateClass extends Component {
    state = {
        institucija: {
            id: 0,
            kategorija: "",
            miestas: "",
            nuotrauka: "",
            pavadinimas: ""
        }
    };

    static propTypes = {
        id: PropTypes.number,
        pavadinimas: PropTypes.string.isRequired,
        miestas: PropTypes.string.isRequired,
        kategorija: PropTypes.number.isRequired,
        nuotrauka: PropTypes.string.isRequired
    };

    static defaultProps = {
        pavadinimas: 'Undefined',
        miestas: 'Undefined',
        kategorija: "Undefined",
        nuotrauka: 'Undefined'
    };

    changeValueHandler = (fieldName) => {
        return (
            (event) => {
                const changeField = this.state.institucija;
                changeField[fieldName] = event.target.value;
                this.setState({institucija: changeField})
            }
        )
    };

    addInstitucija = () => {
        const institucija = this.state.institucija;
        const institucijosId = this.props.params.id;
        if (institucijosId === 'new') {
            axios.post('/institucijos/', institucija).then(response => {
                console.log(response);
            }).catch(error => {
                console.log('Error = ' + error)
            })
        } else {
            axios.put('/institucijos/' + institucijosId, institucija).then(response => {
                console.log(response)
            }).catch(error => {
                console.log('Error = ' + error)
            })
        }
        hashHistory.replace('/admin')
    };

    componentDidMount() {
        const institucijosId = this.props.params.id;
        if (institucijosId !== 'new')
            axios.get('institucijos/' + institucijosId).then(response => {
                this.setState({institucija: response.data})
            }).catch(error => {
                console.log('Error = ' + error)
            })
    }

    listInstitucija = () => this.props.router.push('institucijos');
    adminInstitucija = () => this.props.router.push('admin');
    cancelCreateInstitucija = () => hashHistory.goBack();

    render() {

        return (
            <div>
                <Navbar
                    home={this.listInstitucija}
                    admin={this.adminInstitucija}
                />

                <InstitucijaCreate
                    title={this.state.institucija.pavadinimas}
                    image={this.state.institucija.nuotrauka}
                    city={this.state.institucija.miestas}
                    category={this.state.institucija.kategorija}
                    onFieldChange={this.changeValueHandler}
                    submitData={this.addInstitucija}
                    cancelCreate={this.cancelCreateInstitucija}
                />
            </div>
        )
    }
}

export default InstitucijaCreateClass;