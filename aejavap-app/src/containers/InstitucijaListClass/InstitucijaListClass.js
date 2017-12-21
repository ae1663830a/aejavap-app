import React, {Component} from 'react';
import InstitucijosList from '../../components/InstitucijosList/InstitucijosList'
import PropTypes from 'prop-types'
import axios from 'axios'
import Navigation from '../../components/Navigation/Navbar'
import image from '../../assets/biblioteka.jpg'

class InstitucijaListClass extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    };

    static defaultProps = {
        id: 0,
        title: 'Undefined',
        city: 'Undefined',
        image: 'Undefined',
        category: 'Undefined'
    };

    state = {
        institucijosList: [
            {id: 1, title: 'Belgrado Biblioteka', city: 'Belgradas', category: 'Biblioteka', image: image},
            // {id: 2, title: 'iPhone', description: 'new phone', price: 6, image: phone},
            // {id: 3, title: 'Samsung', description: 'old phone', price: 5, image: phone},
        ]
    };


    institucijaAdmin = () => this.props.router.push('admin');
    institucijaList = () => this.props.router.push('institucijos');

    institucijaDetails = (index) => {
        this.props.router.push('institucijos/' + this.state.institucijosList[index].id);
    };


    componentDidMount() {
        axios.get('institucijos/').then(response => {
            const institucijos = response.data;
            this.setState({
                institucijosList: institucijos
            })
        }).catch(error => {
            console.log('Error = ' + error)
        })
    }

    render() {

        return (
            <div>
                <Navigation
                    admin={this.institucijaAdmin}
                    home={this.institucijaList}
                />
                <InstitucijosList
                    institucijosList={this.state.institucijosList}
                    key={this.state.institucijosList.id}
                    detail={this.institucijaDetails}/>
            </div>
        );
    }
}

export default InstitucijaListClass;