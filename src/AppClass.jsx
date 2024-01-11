import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  // SO THIS imagedata( below is a method of a class)
  // and below (render) we use this.imageData() to call our method 
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render() {
    const imgData = this.imageData();
  
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <p>APPCLASS</p>
        <div className='row'>
          {
            imgData.map((image)=>{
              return(
                <div className='column' key={image.id}>
                  <img src={image.img} alt=""/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
