(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=(a(15),a(6)),s=a(3),d=a(4),i=a(7),u=a(5),h=a(8),m=(a(16),function(e){var t=e.changeMonth;return c.a.createElement("div",{onClick:t},c.a.createElement("button",{type:"button",value:"prev",className:"btn btn--prev"},"prev"),c.a.createElement("button",{type:"button",value:"now",className:"btn btn--now"},"today"),c.a.createElement("button",{type:"button",value:"next",className:"btn btn--next"},">"))}),v=function(e){var t=e.items,a=e.showModal;return c.a.createElement("div",{className:"calendar",onClick:a},c.a.createElement("div",{className:"calendar__day"},"\u041f\u041d"),c.a.createElement("div",{className:"calendar__day"},"\u0412\u0422"),c.a.createElement("div",{className:"calendar__day"},"\u0421\u0420"),c.a.createElement("div",{className:"calendar__day"},"\u0427\u0422"),c.a.createElement("div",{className:"calendar__day"},"\u041f\u0422"),c.a.createElement("div",{className:"calendar__day"},"\u0421\u0411"),c.a.createElement("div",{className:"calendar__day"},"\u0412\u0421"),t.map(function(e,t){return c.a.createElement("div",{className:"calendar__day",key:t},e.day,c.a.createElement("br",null),e.todos)}))},y=function(e){var t=e.eventValue,a=e.changeValue,n=e.addEvent,r=e.cancelAdding;return c.a.createElement("div",{className:"modal"},c.a.createElement("h2",null,"Add event?"),c.a.createElement("input",{placeholder:"add event",autoFocus:!0,onChange:a,event:t}),c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:n},"add"),c.a.createElement("button",{type:"button",onClick:r},"cancel")))},f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).createCalendar=function(e){for(var t=new Date(e.getFullYear(),e.getMonth()),n=new Date(e.getFullYear(),e.getMonth()+1,0),c=[],r=1;r<=n.getDate();r++)c.push({day:r,month:e.getMonth()+1});if(0===t.getDay())for(var o=0;o<6;o++)c.unshift({id:""});if(t.getDay()>1)for(var l=0;l<t.getDay()-1;l++)c.unshift({id:""});if(0!==n.getDay())for(var s=0;s<7-n.getDay();s++)c.push({id:""});a.setState({month:e.getMonth()+1},function(){a.setDays(c)})},a.setDays=function(e){a.setState({days:a.addToDays(e,a.state.daysWithEvents)})},a.changeMonth=function(e){var t,n=e.target.value,c=a.state.currentDay;"prev"===n?t=new Date(c.getFullYear(),c.getMonth()-1):"next"===n?t=new Date(c.getFullYear(),c.getMonth()+1):"now"===n&&(t=new Date),a.setState({currentDay:t},function(){a.createCalendar(a.state.currentDay)})},a.showModal=function(e){a.setState({isShowModal:!0,currentCell:e.target.textContent})},a.changeValue=function(e){a.setState({eventValue:e.target.value})},a.addEvent=function(){var e=a.state.days;e.forEach(function(e){e.day==a.state.currentCell&&(e.todos=a.state.eventValue,a.setState(function(t){return{daysWithEvents:[].concat(Object(l.a)(t.daysWithEvents),[e])}}))}),a.setState({days:e,isShowModal:!1})},a.cancelAdding=function(){a.setState({isShowModal:!1})},a.addToDays=function(e,t){var n=t.filter(function(e){return e.month===a.state.month});return e.map(function(e){return n.forEach(function(t){e.day===t.day&&(e=t)}),e})},a.state={currentDay:new Date,month:"",currentCell:"",days:[],isShowModal:!1,eventValue:"",daysWithEvents:[]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.createCalendar(this.state.currentDay)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"The calendar"),c.a.createElement("h2",null,this.state.month),c.a.createElement(m,{changeMonth:this.changeMonth})),c.a.createElement(v,{items:this.state.days,showModal:this.showModal}),this.state.isShowModal&&c.a.createElement(y,{eventValue:this.state.eventValue,changeValue:this.changeValue,addEvent:this.addEvent,cancelAdding:this.cancelAdding}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.cc81c975.chunk.js.map