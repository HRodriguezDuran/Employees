import { useEffect, useState } from 'react';
import './App.css';

interface Employee {
    id: number;
    name: string;
    location: string;
    salary: string;
}

function App() {
    const [employees, setEmployees] = useState<Employee[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = employees === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Location(F)</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.location}</td>
                        <td>{employee.salary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Employees</h1>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setEmployees(data);
    }

}

export default App;