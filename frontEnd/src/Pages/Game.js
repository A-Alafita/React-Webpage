
import Navigation from '../Header/Navigation';
import CardItem from '../Widgets/CardItem';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Linegraph from '../Widgets/Linegraph';
import '../CSS/Start.css'

function Game() {


    return (
        <div>
            <Navigation tab='3' />
            <div className="contanier">
                <Grid container spacing={6} style={{ top: '30%', left: '30%', display: 'block', position: 'absolute' }}>
                    <Grid item xs>
                        <Grid container spacing>
                        <CardItem CardContent={<Linegraph />} />
                        <CardItem CardContent={<Linegraph />} />
                        <CardItem CardContent={<Linegraph />} />
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <CardItem CardContent={<Linegraph />} />
                    </Grid>
                    <Grid item xs>
                        <CardItem CardContent={<Linegraph />} />
                    </Grid>


                </Grid>
                {/* !last working with bootstrap */}
                {/* <Container maxWith='m' style={{ top: '30%', left: '30%', display: 'block', position: 'absolute' }} >
                    <Row>
                        <CardItem CardContent= {<Linegraph/>}  />
                        <CardItem />

                    </Row>
                    <Row>
                    </Row>
                    {/* <div> <Tasks /> </div> */}
                {/* </Container> */}
            </div>
        </div>
    );
}
export default Game;