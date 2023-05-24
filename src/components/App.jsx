import { useState } from 'react';
import { Notification } from './Notification/Notification';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = evt => {
     if (evt === 'good') setGood(state => state + 1);
     if (evt === 'neutral') setNeutral(state => state + 1);
     if (evt === 'bad') setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };


  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return good ? Math.round((good / total) * 100) : 0;
  };

  const options = Object.keys({ good, bad, neutral });

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={options} handleLeaveFeedback={handleLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}


  

  

  

