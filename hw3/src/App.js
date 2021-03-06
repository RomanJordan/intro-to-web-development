import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PadInput from './components/PadInput';
import DesignPad from './components/DesignPad'
import EditBtn from './components/EditBtn'
import { Container, Button } from 'react-bootstrap'

// test
function App() {
  return (
    <div className="container">  
          <div className="row justify-content-md-center">
            <PadInput />
            <DesignPad />
            </div>
            <div className="row justify-content-md-center">
              <EditBtn/>
            </div> 
    </div>
  );
}

export default (App);
