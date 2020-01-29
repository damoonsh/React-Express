import React, { Component } from 'react';
import './Customers.css';

class Customers extends Component {
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, () => console.log("Customers fetched...", customers)));
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(item => ( 
                        <li key={item.id}>{item.firstName} {item.lastName}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Customers;