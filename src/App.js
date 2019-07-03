import React from 'react';
import './App.css';
import ChooseMonth from './Components/ChooseMonth'
import Calendar from './Components/Calendar'
import Modal from './Components/Modal'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: new Date(),
      month: '',
      currentCell: '',
      days: [],
      isShowModal: false,
      eventValue: ''
    }
  }

  componentDidMount() {
    this.createCalendar(this.state.currentDay)
  }

  createCalendar = (date) => {
    let firstday = new Date(date.getFullYear(), date.getMonth());
    let lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let daysThisMonth = [];

    for (let i = 1; i <= lastday.getDate(); i++) {
      daysThisMonth.push({ day: i, month: date.getMonth() + 1 })
    }
    if (firstday.getDay() !== 1) {
      for (let i = 0; i < firstday.getDay() - 1; i++) {
        daysThisMonth.unshift({ id: '' })
      }
    }
    if (lastday.getDay() !== 0) {
      for (let i = 0; i < 7 - lastday.getDay(); i++) {
        daysThisMonth.push({ id: '' })
      }
    }

    this.setState({
      month: date.getMonth(),
      days: daysThisMonth
    })
    // console.log(date, firstday.getDay(), lastday.getDay(), daysThisMonth);
  }

  changeMonth = (event) => {
    let button = event.target.value;
    if (button === 'prev') {
      let day = this.state.currentDay;
      this.setState({
        currentDay: new Date(day.getFullYear(), day.getMonth() - 1)
      }, () => { this.createCalendar(this.state.currentDay) })
    } else if (button === 'next') {
      let day = this.state.currentDay;
      this.setState({
        currentDay: new Date(day.getFullYear(), day.getMonth() + 1)
      }, () => { this.createCalendar(this.state.currentDay) })
    } else if (button === 'now') {
      this.setState({
        currentDay: new Date()
      }, () => { this.createCalendar(this.state.currentDay) })
    }
  }

  showModal = (event) => {
    this.setState({
      isShowModal: true,
      currentCell: event.target.textContent
    })
  }

  changeValue = (event) => {
    this.setState({ eventValue: event.target.value });
    console.log(event.target.value)
  }

  addEvent = () => {
    let copy = this.state.days;
    copy.forEach(item => {
      if (item.day == this.state.currentCell) {
        item.todos = this.state.eventValue;
      }
    });
    this.setState({
      days: copy,
      isShowModal: false
    })
  }

  cancelAdding = () => {
    this.setState({
      isShowModal: false
    })
  }

  render() {
    return (
      <div className="App" >
        <header className="header">
          <h1>The calendar</h1>
          <ChooseMonth changeMonth={this.changeMonth} />
        </header>
        <Calendar items={this.state.days} showModal={this.showModal} />
        {this.state.isShowModal &&
          <Modal
            eventValue={this.state.eventValue}
            changeValue={this.changeValue}
            addEvent={this.addEvent}
            cancelAdding={this.cancelAdding}
          />}
      </div >
    );
  }
}

export default App;
