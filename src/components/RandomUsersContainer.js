import React, { useEffect, useState } from "react";
import API from '../utils/API';
import Navbar from "./Navbar";
import Table from "./Table";

export default function RandomUsersContainer(){
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState([]);
  const [last, setLast] = useState([]);
  const [isActiveLast, setActiveLast] = useState(false);
  const [first, setFirst] = useState([]);
  const [isActiveFirst, setActiveFirst] = useState(false);
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

  
  function toggleFirst(){
    const iconFirst = document.querySelector('.sort-btn-first > small > i');
    setActiveFirst(!isActiveFirst)
    iconFirst.classList.toggle('active');
    search.sort((a, b) => {
      return a.name.first < b.name.first
        ? -1
        : a.name.first > b.name.first
        ? 1
        : 0;
    });
    setEmployees(isActiveFirst ? search.reverse() : search);
    
  }

  function toggleLast(){
    const iconLast = document.querySelector('.sort-btn-last > small > i');
    setActiveLast(!isActiveLast)
    iconLast.classList.toggle('active');
    search.sort((x, y) => {
      return x.name.last < y.name.last
        ? -1
        : x.name.last > y.name.last
        ? 1
        : 0;
    });
    setEmployees(isActiveLast ? search.reverse() : search);
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
        
          <Table toggleLast={toggleLast} toggleFirst={toggleFirst} results={employees}/>
        
      </>
    );
  
}


