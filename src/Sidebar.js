import React, { Component } from 'react'
import './Sidebar.css'
import VrModule from './VrModule'

export class Sidebar extends Component {


    state = {
        axis : [
            { length:2 , breadth:1.5 }
        ]
    }

    addAxis = () =>{
        let len = document.getElementById("getLength").value;
        let bre = document.getElementById("getbreadth").value;
        // console.log(length,breadth);
        if(len === '' && bre === '')
        {
        alert("Enter all the credentials");
        console.log("Enter all the credentials");
        }
        else if(len === ''){
        alert("Enter all the credentials");
        console.log("Enter the length");
        }
        else if(bre === ''){
        alert("Enter all the credentials");
        console.log("Enter the breadth");
        }
        else{
            if(isNaN(len) || isNaN(bre)){
                alert("Enter only numbers")
            }
            else{
                
                let arr = this.state.axis;
                console.log(arr.length)
                arr.push({length:len,breadth:bre})
                document.getElementById("getLength").value = '';
                document.getElementById("getbreadth").value = ''
                this.setState(
                    {
                        
                        axis : arr
                        // axis[]
                    }
                )
            }
        }
    }


    render() {
        return (
            <div className="main__content">
                <div className="sidebar MINIMAL-WHITE-SERIES-2-hex">
                    <div className="sidebar__top">
                        <div className="sidebar__title">
                            <h4>Create Your Home</h4>
                        </div>
                        <div className="sidebar__inputDetails">
                            <div className="sidebar__inputs">
                                <p>
                                    Length
                                </p>
                                <input type="text" id="getLength" placeholder="Enter the length" placeholder="0"/>
                            </div>
                            <div className="sidebar__inputs">
                                <p>
                                    Breadth
                                </p>
                                <input type="text" id="getbreadth" placeholder="Enter the breadth" placeholder="0"/>
                            </div>
                            <div className="seidebar__submit">
                                <input type="submit" onClick={this.addAxis}/>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar__loginDetails">
                        <p>Hi, Guest</p>
                        <div className="sidebar__loginButtons">
                            <input type="submit" value="Login"/>
                            <input type="submit" value="SignUp"/>
                        </div>
                    </div>
                </div>
                <div className="vr">
                    <VrModule inputs={this.state.axis}/>
                    {/* <iframe src="vrModule.js"></iframe> */}
                    {/* <embed src="./VrModule.js"/> */}
                </div>
            </div>
        )
    }
}

export default Sidebar
