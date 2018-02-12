import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilters extends React.Component {

    state = {
        endDate: moment().add(),

        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setEndDate(endDate))
        this.props.dispatch(setStartDate(startDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    render(){
        return  (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select onChange={(e) => {
                    this.props.dispatch(e.target.value == 'date' ? sortByDate() : sortByAmount())
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)