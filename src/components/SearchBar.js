import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {term: ''}
    
    onFormsubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render () {
        return (
            <div className="search-bar ui segment" style={{marginTop: '30px'}}>
                <form className="ui form" onSubmit={this.onFormsubmit}>
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={event => this.setState({term: event.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}