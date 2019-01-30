import React, { Component } from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            country: null,
            day: null,
        }
    }


    handlerChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    searchDate(){
        console.log('your data sned DB')
        // this.props.history.push('/googlemaps');
    }


    render() {
        return (
            <div>
                <form>
                    <input id='country' type='text' onChange={(e) => { this.handlerChange(e) }} />
                    <select onChange={(e) => { this.handlerChange(e) }}>
                        <option value='anyDate'>Any Date</option>
                        <option value='today'> Today</option>
                        <option value='tomorrow'> Tomorrow</option>
                        <option value='thisWikend'> This wikend</option>
                        <option value='thisWeek'> This week</option>
                        <option value='nextWeek'> Next week</option>
                        <option value='thisMonth'> This month</option>
                        <option value='nextMonth'> Next month</option>

                    </select>
                    <button type='button'onClick={()=>{this.searchDate() }} > Search </button>

                </form>

            </div>
        )
    }
}


export default HomePage;
