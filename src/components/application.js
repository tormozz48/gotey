import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-bootstrap';

import Header from './header';
import Panel from './panel';
import PanelMap from './panel-map';
import Navigation from './navigation';
import Products from './products';
import Footer from './footer';

class Application extends Component {
    render() {
        const {panels, navigation, menu, products} = this.props;

        return (
            <div>
                <Header navigation={navigation}/>
                <Grid className="application-content" fluid={true}>
                    <Row className="show-grid">
                        <Col lg={4} md={5} sm={5} xs={12}>
                            <Panel params={panels[0]}/>
                            <Panel params={panels[1]}/>
                            <PanelMap params={panels[2]} navigation={navigation}/>
                        </Col>
                        <Col lg={8} md={7} sm={7} xs={12}>
                            <Navigation menu={menu}/>
                            <Products products={products}/>
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
        menu: state.menu,
        panels: state.main.panels,
        products: state.products
    })
)(Application);
