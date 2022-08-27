import React from 'react'
//import "./spinnerStyles.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
    <h4 class="text-center fw-semibold">Scanning your location get available sellers...</h4>
   
      <div className="loading-spinner">
      <div class="spinner1">
                                                <div class="double-bounce1"></div>
                                                <div class="double-bounce2"></div>
                                            </div>
      
      </div>
    </div>
  )
}
