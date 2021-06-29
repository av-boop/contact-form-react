import React, { Component } from 'react'




class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
            name:'',
            email:'',
            number:'',
            message:'',
            display1:"none",
            display2:"none",
            display3:"none",
            display4:"none",
            color:"red",
            messageText:"Mobile number is required",
            sucessColor:"green",
            sucessColor1:"green",
            sucessColor2:"green",
            sucessColor3:"green",
            emailText:"Email is required",
            sucessDisplay:"none"
            
            




        }
    }

    

    

    nameChange = (event) => {

        this.setState({

            name:event.target.value
        })
    }
    emailChange = (event) => {

        this.setState({

            email:event.target.value
        })
    }

    numberChange = (event) => {

        this.setState({

            number:event.target.value
        })
    }

    
    msgChange = (event) => {

        this.setState({

            message:event.target.value
        })
    }

    handleSubmit = () => {

        if(!this.state.name.trim()){

            this.setState({
                display1:"block",
                sucessColor:"red"
            })
        }
        
        if(!this.state.email.trim()){

            this.setState({
                display2:"block",
                sucessColor1:"red"
            })
        }
        
        if(!this.state.number.trim()){

            this.setState({
                display3:"block",
                sucessColor2:"red"
            })
        }
        
        if(!this.state.message.trim()){

            this.setState({
                
                display4:"block",
                sucessColor3:"red"
            })
        }

        
        if(this.state.number && (this.state.number.length<10 | this.state.number.length>10)){

            this.setState({
                
                display3:"block",
                messageText:"Mobile number must be of 10-digits",
                sucessColor2:"red"

            })
        }

        if(this.state.email && !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email) ){

            this.setState({
                
                display2:"block",
                emailText:"Please enter a valid email",
                sucessColor1:"red"

            })

            
        }

        if(this.state.name && this.state.email && this.state.message && this.state.number && this.state.number.length==10 && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){

            
            this.setState({
                
                sucessDisplay:"flex",
                name:'',
                email:'',
                number:'',
                message:''
            })
        }

      
       

        

}

   close = () => {

    this.setState({

        sucessDisplay:"none"
    })
   }


    remove1 = () => {
        this.setState({

            display1:"none",
            sucessColor:"green"
        })
    }
    remove2 = () => {
        this.setState({

            display2:"none",
            sucessColor1:"green"
        })
    }

    remove3 = () => {
        this.setState({

            display3:"none",
            sucessColor2:"green"
        })
    }

    remove4 = () => {
        this.setState({

            display4:"none",
            sucessColor3:"green"
        })
    }


     
    
    
    render(){
        return (
           <React.Fragment>
               <div className="container">
               <div className="parent-div">
                   <div className="head-div">
                        <h1>Contact</h1>
                   </div>
                   
                   <div className="name-div">
                    <input type="text" className="name-input" placeholder="Enter Your Name" value={this.state.name} onChange={this.nameChange} onKeyUp={this.remove1}  style={{borderBottomColor:this.state.sucessColor}}/>
                    <p style={{display:this.state.display1,color:"red"}}>Name is required</p>
                   </div>

                   <div className="name-div">
                    <input type="text" className="name-input" placeholder="Enter Your Email" value={this.state.email} onChange={this.emailChange}  style={{borderBottomColor:this.state.sucessColor1}} onKeyUp={this.remove2}/>
                    <p style={{display:this.state.display2,color:"red"}}>{this.state.emailText}</p>
                   </div>

                   <div className="name-div">
                    <input type="text" className="name-input" placeholder="Enter Your Mobile Number" value={this.state.number} onChange={this.numberChange}  style={{borderBottomColor:this.state.sucessColor2}} onKeyUp={this.remove3}/>
                    <p style={{display:this.state.display3,color:"red"}}>{this.state.messageText}</p>
                   </div>

                   <div className="textarea-div">
                    <textarea placeholder="Enter Your Message" className="msg-box" value={this.state.message} onChange={this.msgChange}  style={{borderColor:this.state.sucessColor3}}  onKeyUp={this.remove4}/>
                    
                   </div>
                   <p style={{display:this.state.display4,color:"red"}}>Type your Message</p>
                   

                   <div className="btn-div">
                       <button className="btn" onClick={this.handleSubmit}>Send Message</button>
                   </div>

               </div>

           </div>
           
           <div className="main-container" style={{display:this.state.sucessDisplay}}>
                   <div className="sucess-msg-container">

                       <p className="sucess-msg">Your Message has been sent sucessfully!</p>
                       <div className="btn-div">
                           <button className="btn" onClick={this.close}>Close</button>
                       </div>
                       
                 </div>
                </div>
           

           
           
          
           </React.Fragment>
           
        )
    }
}

export default Form
