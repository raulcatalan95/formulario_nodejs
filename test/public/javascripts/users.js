

$(document).ready(function(){
$.get('http://localhost:3000/users', data => {
    
    data.forEach(u => {
    $('tbody').append(`

    <tr>
    
   <td> ${u.name.replace(/ñ/g,'nn') }  <td>
   <td>${u.lastname.replace(/ñ/g,'nn')} <td>
    ${u.email} 

    <tr>

    `)
})
console.log(data)
})

})

$('form').submit(function(e){
e.preventDefault()

newuser()
})

function newuser(){
    const name = document.querySelector('#new_name').value
    const lastname = document.querySelector('#new_lastname').value
    const email = document.querySelector('#new_email').value
    const password = document.querySelector('#new_pass').value
    


const data = {
name,
lastname,
email,
password,

}

$.post('http://localhost:3000/users', data, (resp, status)=>{
    
    window.location.href = '/'
})
}