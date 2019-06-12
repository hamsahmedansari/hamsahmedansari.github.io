import { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  writeTitle = (num, s, d, decimal) => {
    let i = 0;
    let speed = s ? s : 100;
    let delay = d ? d : 0;
    let newSpeed = speed / Number(num);
    let temp = decimal ? 0.1 : 1;
    setTimeout(() => {
      let iteration = setInterval(() => {
        if (this.state.number >= num) {
          clearInterval(iteration);
        } else {
          this.setState(pre => ({
            number: pre.number + temp
          }));
        }
        i++;
      }, newSpeed);
    }, delay);
  };
  componentDidMount() {
    this.writeTitle(
      this.props.number,
      this.props.speed,
      this.props.delay,
      this.props.isDecimal
    );
  }
  render() {
    return Number(this.state.number).toFixed(1);
  }
}

export default Increment;
