import React from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<div>
          <ul className={css.statistics_list}>
            <li className={css.statistics_item}>Good: {good}</li>
            <li className={css.statistics_item}>Neutral: {neutral}</li>
            <li className={css.statistics_item}>Bad: {bad}</li>
            <li className={css.statistics_item}>Total: {total}</li>
            <li className={css.statistics_item}>Positive feedback: {positivePercentage}%</li>
        </ul>
        </div>
)

Statistics.propTypes = {
good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercantage: PropTypes.number,
}


export default Statistics;


