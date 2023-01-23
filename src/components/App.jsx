import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onFeedback = (options) => {
    this.setState(prevState => ({
       [options]: prevState[options] + 1,
      }
      ))
  }
  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  

  render() {
    const options = Object.keys(this.state)
    return (
      <>
      <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={this.onFeedback} />
      </Section>
        <Section title="Statistics">
          {(this.countTotalFeedback() > 0) ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
      </Section>
      </>  
    )
  }
}

export default App;