import React from 'react'
import "./Register.css"

//img
import giraffe from '../../Img/Register/giraffe.png'
import google from "../../Img/Register/google.png"
import facebook from "../../Img/Register/facebook.png"
import Caterpillar from "../../Img/Register/Caterpillar.png"
import Bee from "../../Img/Register/Bee.png"

function Register() {
  return (
    <>
    <div id="MainRegister">
        <div id="MainSectionInRegister">
            <div className='curved-edge1InRegister'></div>
            <img className='giraffeInRegister' src={giraffe} alt="" />
            <div className='btn1InRegister'>Sign Up</div>
            <img src={Caterpillar} alt="" className='CaterpillarInRegister' />
            <div className='btn2InRegister'>Log in</div>
            <img src={Bee} alt="" className='BeeInRegister' />
            <div className='curved-edge2InRegister'></div>
            <div className="line1InRegister"></div>
            <h4 className="text1InRegister">or</h4>
            <div className="line2InRegister"></div>
            <div className="socialMedia1InRegister">
                <img src={google} alt="" className="googleInRegister" />
            </div>
            <div className="socialMedia2InRegister">
                <img src={facebook} alt="" className="facebookInRegister" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Register