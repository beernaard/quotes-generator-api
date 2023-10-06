import React from 'react'
import './quotecomponent.css'
const QuoteComponent = ({dataquote, dataauthor}) => {
  return (
    <div className="quote-container">
      <div className="quote">
        <p>{dataquote}</p>
      </div>
      <div className="author">
        {dataauthor}
      </div>
    </div>
  )
}

export default QuoteComponent