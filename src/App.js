
import './App.css';

function App() {
  return (
    <div className="full-screen-background" >

<div  className='User-secret-key' >

<input
  placeholder="Enter The Magic Code"
  className="Input-field"


  style={{
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    marginBottom: '10px',
  }}
/>
<br />
<button
  type="submit"

  style={{
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }}
>
  Submit
</button>

 </div>

    </div>
  );
}

export default App;
