import React from 'react'
import LoanApplicationForm from './components/Loan_form'
import "bootstrap/dist/css/bootstrap.min.css";
import "rc-slider/assets/index.css";


const App = () => {
  return (
    <div className='container mt-4'>
      <LoanApplicationForm />
    </div>
  )
}

export default App