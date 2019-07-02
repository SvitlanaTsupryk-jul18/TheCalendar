import React from 'react';
import './App.css';
import ChooseMonth from './Components/ChooseMonth'
import Calendar from './Components/Calendar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: new Date(),
      month: '',
      item: '',
      days: []
    }
  }
  componentDidMount() {
    this.createCalendar(this.state.currentDay)
  }

  createCalendar = (date) => {
    let firstday = new Date(date.getFullYear(), date.getMonth());
    let lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let daysThisMonth = [];
    for (let i = 0; i < lastday.getDate(); i++) {
      let current = new Date();
      current.setDate(current.getDate() + i - 1);
      daysThisMonth.push({ id: i, day: current })
    }
    if (firstday.getDay() !== 1) {
      for (let i = 0; i < 7 - firstday.getDay(); i++) {
        daysThisMonth.unshift({ id: '' })
      }
    }
    if (lastday.getDay() !== 7) {
      for (let i = 0; i < 7 - lastday.getDay(); i++) {
        daysThisMonth.push({ id: '' })
      }
    }

    this.setState = {
      month: date.getMonth(),
      days: daysThisMonth
    }
    console.log(date, daysThisMonth, lastday.getDay());
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>The calendar</h1>
          <ChooseMonth />
        </header>
        <Calendar items={this.state.days} month={this.state.month} />
      </div>
    );
  }
}

export default App;
