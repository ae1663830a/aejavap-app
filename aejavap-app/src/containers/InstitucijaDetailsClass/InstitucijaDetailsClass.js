import React, {Component} from 'react'
import Navbar from '../../components/Navigation/Navbar'
import InstitucijosDetails from '../../components/InstitucijaDetails/InstitucijaDetails'
import {hashHistory} from 'react-router'
import axios from 'axios'

class InstitucijaDetailsClass extends Component {

    state = {
        institucijosKnygos: []
    };

    adminInstitucija = () => this.props.router.push('admin');
    listInstitucija = () => this.props.router.push('institucijos');
    goBack = () => hashHistory.goBack();

    knygosDetales = (index) => {
        return this.props.router.push('knygos/' + this.state.institucijosKnygos[index].id);
    };



    componentDidMount() {
        axios.get('knygos/' + this.props.params.id).then(response => {
            const knyga = response.data;
            this.setState({institucijosKnygos: knyga})
        }).catch(error => {
            console.log('Error = ' + error)
        })
    }

    render() {
        return (
            <div>
                <Navbar
                    admin={this.adminInstitucija}
                    home={this.listInstitucija}/>

                <InstitucijaDetailsClass
                    goBack={this.goBack}
                    key={this.state.institucijosKnygos.id}
                    title={this.state.institucijosKnygos.pavadinimas}
                    authos={this.state.institucijosKnygos.autorius}
                    image={this.state.institucijosKnygos.paveiksliukas}
                    details={this.knygosDetales}
                />
            </div>
        )
    }
}

export default InstitucijaDetailsClass;