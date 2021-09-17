import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export class AlertMes extends Component {
    render() {
        return (
                <Alert variant='denger'>
                    Threre is an error
                </Alert>
        )
    }
}

export default AlertMes;
