import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-bootstrap';

import NavBar from './nav-bar';
import Panel from './panel';
import ProductTable from './product-table';

class Application extends Component {
    render() {
        const {panels, products} = this.props;

        return (
            <div>
                <NavBar/>
                <Grid className="application-content">
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <Panel params={panels[0]}/>
                            <Panel params={panels[1]}/>
                        </Col>
                        <Col xs={9} md={9}>
                            <ProductTable product={products.cashTape}/>
                            <ProductTable product={products.checkTape}/>
                            <ProductTable product={products.faxPaper}/>
                            <ProductTable product={products.termoLabel}/>
                            <ProductTable product={products.officePaper}/>
                            <ProductTable product={products.lpuPaper}/>
                            <ProductTable product={products.rollPaper}/>
                            <ProductTable product={products.plotterRolls}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        panels: state.main.panels,
        products: state.products
    })
)(Application);
