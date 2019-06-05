import React from 'react'

class CountryDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.showDetails) {
            return (
                <article>
                    <hr></hr>
                    <h3> {this.props.country.name} Details: </h3>
                    <table className='table table-striped table-active table-bordered' >
                        <tr>
                            <th scope="col">Name</th>
                            <td>{this.props.country.name}</td>
                        </tr>
                        <tbody>
                            <tr>
                                <th scope="col">Capital</th>
                                <td>{this.props.country.capital}</td>
                            </tr>
                            <tr>
                                <th scope="col">Population</th>
                                <td>{this.props.country.population}</td>
                            </tr>
                            <tr>
                                <th scope="col">Calling Codes</th>
                                <td>{this.props.country.callingCodes}</td>
                            </tr>
                            <tr>
                                <th scope="col">Native Name</th>
                                <td>{this.props.country.nativeName}</td>
                            </tr>
                            <tr>
                                <th scope="col">Code</th>
                                <td>{this.props.country.alpha3Code}</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            );
        } else {
            return (null)
        }
    }
}

export default CountryDetails;