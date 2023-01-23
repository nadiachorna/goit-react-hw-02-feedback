import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => (
            <>
                {options.map(option => {
                    return (
                        <button type="button" key={option} onClick={() => onLeaveFeedback(option)} className={css.button}>{option}</button>
                    )
                }
                )}
            </>
        
)

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;