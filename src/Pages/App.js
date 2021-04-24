import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


function App() {
  return (
    <div>
    <div className='box'>
      <form action="">
        <span className="text-center">Welcome to Valgrind</span>
        <div className="input-container">
          <input type="email" required="required" placeholder="User@gmail.com" href='/UserProfile' />
          <label>User:
          </label>
        </div>
        <div className="input-container">
          <input type="password" required="required" placeholder="************" />
          <label>Password:</label>
        </div>
        <ButtonGroup aria-label="Toolbar">
          <Button variant="default me-md-2" className="btn" href = '/Portal'>Ingresar</Button>{''}
          <Button variant="default me-md-2" className="btn">Registrar</Button>{''}
        </ButtonGroup>
      </form>
    </div >
    </div>
  );
}

export default App;
