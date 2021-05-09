import React from "react";

export default function Table(props) {
    return (
    <table className="h-100 table table-striped  table-hover">
      <thead>
        <tr className="table-row">
        
          <th scope="col"><small className="text-muted">Img</small></th>
          <th scope="col"><small className="text-muted">Title</small></th>
          <th scope="col"><button onClick={props.toggleFirst} className="btn sort-btn-first"><small className="text-muted">First <i class="fas fa-angle-up sort-icon"></i></small></button></th>
          <th scope="col"><button onClick={props.toggleLast} className="btn sort-btn-last"><small className="text-muted">Last <i class="fas fa-angle-up sort-icon"></i></small></button></th>
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
 
