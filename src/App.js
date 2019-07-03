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
      eventValue: '',
      daysWithEvents: []
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
    if (firstday.getDay() === 0) {
      for (let i = 0; i < 6; i++) {
        daysThisMonth.unshift({ id: '' })
      }
    }
    if (firstday.getDay() > 1) {
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
      month: date.getMonth() + 1
    }, () => { this.setDays(daysThisMonth) })
  }

  setDays = (daysThisMonth) => {
    this.setState({
      days: this.addToDays(daysThisMonth, this.state.daysWithEvents)
    })
  }

  changeMonth = (event) => {
    let button = event.target.value;
    let day = this.state.currentDay;
    let firstday;
    if (button === 'prev') {
      firstday = new Date(day.getFullYear(), day.getMonth() - 1)
    } else if (button === 'next') {
      firstday = new Date(day.getFullYear(), day.getMonth() + 1)
    } else if (button === 'now') {
      firstday = new Date();
    }
    this.setState({
      currentDay: firstday,
    }, () => { this.createCalendar(this.state.currentDay) })
  }

  showModal = (event) => {
    this.setState({
      isShowModal: true,
      currentCell: event.target.textContent
    })
  }

  changeValue = (event) => {
    this.setState({ eventValue: event.target.value });
  }

  addEvent = () => {
    let copy = this.state.days;
    copy.forEach(item => {
      if (item.day == this.state.currentCell) {
        item.todos = this.state.eventValue;
        this.setState(prevState => ({
          daysWithEvents: [...prevState.daysWithEvents, item]
        }))
      }
    });
    this.setState({
      days: copy,
      isShowModal: false
    });
  }

  cancelAdding = () => {
    this.setState({
      isShowModal: false
    })
  }

  addToDays = (monthdays, eventdays) => {
    let events = eventdays.filter(item =>
      item.month === this.state.month
    )
    let showDays = monthdays.map(el => {
      events.forEach(item => {
        if (el.day === item.day) {
          el = item;
        }
      })
      return el;
    })
    return showDays;
  }

  render() {
    return (
      <div className="App" >
        <header className="header">
          <h1>The calendar</h1>
          <h2>{this.state.month}</h2>
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
