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


                    {/* <table className='table table-active table-bordered' >
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">capital</th>
                                <th scope="col">population</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    {this.props.country.name}
                                </th>
                                <td>
                                    {this.props.country.capital}
                                </td>
                                <td>
                                    {this.props.country.population}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className='table table-active table-bordered ' >
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Native Name</th>
                                <th scope="col">Calling Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {this.props.country.alpha3Code}
                                </td>
                                <td>
                                    {this.props.country.nativeName}
                                </td>
                                <td>
                                    {this.props.country.callingCodes}
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                </article>
            );
        } else {
            return (null)
        }
    }
}

export default CountryDetails;