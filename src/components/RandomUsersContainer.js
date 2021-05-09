import React, { useEffect, useState } from "react";
import API from '../utils/API';
import Navbar from "./Navbar";
import Table from "./Table";

export default function RandomUsersContainer(){
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState([]);
  function handleSearch(){
    const results =[]
    
    const term = document.querySelector('#search').value;
    
    for (let i = 0; i < search.length; i++ ){
     
      if (search[i].name.first.includes(term) 
      || search[i].name.last.includes(term)
      || search[i].email.includes(term)
      || search[i].cell.includes(term)){
        results.push(search[i])
        
      }
    }setEmployees(results)
    
  } 

  function getEmployeesAPI(){
    API.getEmployees()
    .then((res) => {
      setEmployees(res)
      setSearch(res)}
      )
    .catch(err => console.log(err));
  }
   
  useEffect(() => {
    getEmployeesAPI();
  }, [])
  
    return (
      <>
        <Navbar handleSearch={handleSearch}  results={employees} />
        
          <Table results={employees}/>
        
      </>
    );
  
}


