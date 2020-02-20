import React from 'react';
import {List} from 'antd';

class BikeHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bikes: []
        };

        fetch('http://localhost:8080/bikes')
        .then((resp) => {
            return resp.json();
        })
        .then(bikesList => {
            this.setState({
                bikes: bikesList
            });
        });
    }
    
    render() {
        return (
            <List
                dataSource={this.state.bikes}
                renderItem={item => (
                    <List.Item>
                        {item.model} {item.name}
                    </List.Item>
                )}
            />
        );
    }
}

export default BikeHome;