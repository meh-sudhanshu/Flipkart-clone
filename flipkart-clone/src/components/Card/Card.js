

import { useState } from 'react'
import classes from './card.module.css'

import logo from './logo.png'

function Card (props){
    console.log(props)

    const [username , setUsername] = useState("")

    function inputHandler(e){
        e.preventDefault()
        setUsername(e.target.value)
    }
    function buttonHandler(){
        props.props.toggleFlag(1)
        console.log(username +" is the data inserted by user")
        setUsername("")
    }

    return(
        <div className={classes.card}>
            <div className={classes.left}>
                <div className={classes.top}>
                    <h2 className={classes.heading}>Login</h2>
                    <p className={classes.desc}>
                        Get access to your Orders, Wishlist and Recommendations
                    </p>
                </div>
                <div className={classes.bottom}>
                    <img src={logo} className={classes.logo_img}/>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.r_top}>


                    <input type="text" 
                    className={classes.ip} placeholder="Enter Email/Mobile number"
                    onChange={inputHandler}
                    value={username}>
                    </input>


                    <p className={classes.para}>By continuing, you agree to Flipkart's 
                    Terms of Use and Privacy Policy.
                    </p>
                    <button className={classes.btn} onClick={buttonHandler}>Continue</button>
                </div>
                <div className={classes.r_bottom}>
                    <a href='#' className={classes.link}>New to Flipkart? Create an account</a>
                </div>
            </div>
        </div>
    )
}


export default Card