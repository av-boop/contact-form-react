import React, { Component } from 'react'
 

class FormSucess extends Component {

    
    
    render() {

         return (
            <React.Fragment>
                <div className="main-container" style={{display:this.props.sucessDisplay}}>
                   <div className="sucess-msg-container">

                       <p className="sucess-msg">Your Message has been sent sucessfully!</p>
                       <div className="btn-div">
                           <button className="btn">Close</button>
                       </div>
                       
                 </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FormSucess
