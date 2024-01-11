import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  const imgData = imageData();

  return (
    <div>
      <h1>Kalvium Gallery</h1>
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

export default App;
