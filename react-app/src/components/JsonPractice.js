import React from 'react'
import practiceSet from './JSON Files/practice.json'

function JsonPractice() {
  return (
    <div>
      <h1>JSON Practice</h1>

      {practiceSet && practiceSet.map((data,index) => {
        return (
        <div className="data-con" key={index}>
            <p>{data.name}</p>

            {data.Lang && data.Lang.map((codeLang, index)=>{
                return(
                    <div className="lang-con" key={index} style={{display:'flex', justifyContent:"center"}}>
                        --<h5>{codeLang.language}</h5>--
                    </div>
                )
            })}
        </div>
        )
        
      })}
    </div>
  )
}

export default JsonPractice
