// import { Navigation } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Start.css'
import Navigation from '../Header/Navigation';
import Tasks from '../Widgets/Tasks';
import CardItem from '../Widgets/CardItem'; 
import { Container,Row,Col } from 'react-bootstrap';

function Portal() {
    return (
        <div className='welcome-box'>
            <Navigation tab='1' />
            <div className="contanier">
                <Container  maxWith = 'm' style = {{top:'30%',left:'30%',display:'block',position:'absolute'}} >
                    <Row>
                    <CardItem/>
                    <CardItem/>

                    </Row>
                    <Row>
                    </Row>
                {/* <div> <Tasks /> </div> */}
                </Container>
            </div>
        </div>
    );
}

export default Portal;