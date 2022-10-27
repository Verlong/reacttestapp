import {useState} from 'react';
const AddButton = () => {
//let name = 'Maryna';
const[name, setName] = useState('Maryna');
const[age, setAge]=useState(35);

const ShowHelloWorld = () => {

    console.log("Hello world");
}
const takeName =(e) => {

    console.log("Hello world", e);
}



    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={ShowHelloWorld}>Knopka</button>
        <input onClick={(e)=> takeName(e.target.value)} type="text" ></input>
      </div>
    );
  }
  
  export default AddButton;