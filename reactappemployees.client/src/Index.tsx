import { useEffect, useState } from 'react';
import './App.css';



    onCreateEmployee = () => {
        let empInfo = {
            Id: this.refs.Id.value,
            Name: this.refs.Name.value,
            Location: this.refs.Location.value,
            Salary: this.refs.Salary.value

        };

        fetch('https://localhost:44306/api/Employee', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: empInfo
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: 'New Employee is Created Successfully' });
            }
        });
    }
    class EmployeeComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                message: ‘’
            };
        }


    }


    render(){
        return (
            <div>
                <h2>Please Enter Employee Details...</h2>
                <p>
                    <label>Employee ID : <input type="text" ref="Id"></input></label>
                </p>
                <p>
                    <label>Employee Name : <input type="text" ref="Name"></input></label>
                </p>
                <p>
                    <label>Employee Location : <input type="text" ref="Location"></input></label>
                </p>
                <p>
                    <label>Employee Salary : <input type="text" ref="Salary"></input></label>
                </p>

                <button onClick={ }>Create</button>
            </div>
        )
    }

