import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-bootstrap';

import NavBar from './nav-bar';
import Panel from './panel';
import PanelMap from './panel-map';
import ProductTable from './product-table';
import Footer from './footer';

class Application extends Component {
    render() {
        const {panels, navigation, products} = this.props;

        return (
            <div>
                <NavBar/>
                <Grid className="application-content" fluid={true}>
                    <Row className="show-grid">
                        <Col xs={4} md={4}>
                            <Panel params={panels[0]}/>
                            <Panel params={panels[1]}/>
                            <PanelMap params={panels[2]} navigation={navigation}/>
                        </Col>
                        <Col xs={8} md={8}>
                            <ProductTable product={products.cashTape} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.checkTape} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.faxPaper} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.termoLabel} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.officePaper} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.lpuPaper} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.rollPaper} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.plotterRolls} columns={['name', 'type', 'amount']}/>
                            <ProductTable product={products.propilenTape} columns={['typeSize', 'winding']}/>
                            <ProductTable product={products.stretchFilmFood} columns={['typeSize', 'winding']}/>
                            <ProductTable product={products.termFilm} columns={['typeSize', 'winding']}/>

                        </Col>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        navigation: state.main.navigation,
        panels: state.main.panels,
        products: state.products
    })
)(Application);
