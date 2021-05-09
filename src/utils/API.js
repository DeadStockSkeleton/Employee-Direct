export default {
    getEmployees: function(){
        return fetch('https://randomuser.me/api/?results=100', {
        method: 'GET'
    }).then((res => res.json())).then((data)=>{
        return data.results;
    })
    }
}