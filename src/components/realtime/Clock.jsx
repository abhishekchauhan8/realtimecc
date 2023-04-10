import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <>
        <div class="clock">
          <div
            class="hour_hand"
            style={{
              transform: `rotateZ(${this.state.time.getHours() * 30}deg)`,
            }}
          ></div>
          <div
            class="min_hand"
            style={{
              transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`,
            }}
          ></div>
          <div
            class="sec_hand"
            style={{
              transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`,
            }}
          ></div>

          <span class="clock_twelve">12</span>
          <span class="clock_one">1</span>
          <span class="clock_two">2</span>
          <span class="clock_three">3</span>
          <span class="clock_four">4</span>
          <span class="clock_five">5</span>
          <span class="clock_six">6</span>
          <span class="clock_seven">7</span>
          <span class="clock_eight">8</span>
          <span class="clock_nine">9</span>
          <span class="clock_ten">10</span>
          <span class="clock_eleven">11</span>
        </div>
      </>
    );
  }
}

export default Clock;
