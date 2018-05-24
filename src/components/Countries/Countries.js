import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

export default class Countries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentWillMount() {
        this.setState({...this.state, loading: true})
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames =>
                this.setState({countryNames, loading: false})
            )
    }

    render() {
        const {countryNames, loading} = this.state

        return (
            (loading) ?
                <div>Loading Countries</div> :
                (!countryNames.length) ?
                    <div>No countries found</div> :
                    <ul>
                        {
                            countryNames.map((countryName, index) => (
                                <li key={index}>{countryName}</li>
                            ))
                        }
                    </ul>
        )
    }
}

