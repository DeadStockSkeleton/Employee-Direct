import React from "react";

export default function Table(props) {
    return (
    <table className="h-100 table table-striped  table-hover">
      <thead>
        <tr className="table-row">
        
          <th scope="col"><small className="text-muted">Img</small></th>
          <th scope="col"><small className="text-muted">Title</small></th>
          <th scope="col"><small className="text-muted">First</small></th>
          <th scope="col"><small className="text-muted">Last</small></th>
          <th scope="col"><small className="text-muted">Email</small></th>
          <th scope="col"><small className="text-muted">Phone</small></th>
        </tr>
      </thead>
      <tbody id="tbody">
          
            {props.results.map((employee , i) => (
            <tr>
              <td><img className="employee-img" src={employee.picture.thumbnail} alt={employee.name.last + ", " + employee.name.first} /></td>
              <th>{employee.name.title}</th>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.cell}</td>

            </tr>
              
            ))}
          
        
      </tbody>
    </table>
  );
 
}
 
