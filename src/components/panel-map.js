import React from 'react';
import Panel from 'react-bootstrap/es/Panel.js';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export default (props) => {
    const {params, navigation} = props;

    const header = <h3>{params.title}</h3>;
    const mapState = {center: navigation.point, zoom: 16};

    return (
        <Panel header={header} className="panel-map">
            <YMaps>
                <Map state={mapState} width={'100%'}>
                    <Placemark
                        geometry={{
                            coordinates: navigation.point
                        }}
                        properties={{
                            hintContent: navigation.address,
                            balloonContent: navigation.address
                        }}
                        options={{
                            iconLayout: 'default#image'
                        }}
                    />
                </Map>
            </YMaps>
        </Panel>
    );
};
