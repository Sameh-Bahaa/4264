import React from 'react'

class SearchHistory extends React.Component {
    constructor() {
        super();
        this.onDeleteRecord = this.onDeleteRecord.bind(this);
    }
    onDeleteRecord(event) {
        this.props.onDeleteRecord(event);
    }
    render() {
        if (this.props.searchHistoryItems.length > 0) {

            return (

                <article>
                    <hr></hr>
                    <h5> Search History: </h5>

                    <ul className="list-group overflow-auto">
                        {this.props.searchHistoryItems.map((item, index) => {
                            return (
                                <li className='list-group-item clearfix' key={item}>
                                    {item}
                                    <span className="float-right button-group">
                                        <button type="button" className="btn btn-danger" onClick={() => this.onDeleteRecord(item)}>
                                            <span className="glyphicon glyphicon-remove"></span> Delete
                                    </button>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </article>
            );
        } else {
            return null
        }
    }
}

export default SearchHistory;