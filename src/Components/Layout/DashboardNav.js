
import React from 'react';
import $ from 'jquery';



const DashboardNav = () => {
  let data = sessionStorage.getItem('user');
    data = JSON.parse(data);
    const str = data.first_name;
    const role = data.role;
  
   /*  const str1 = str.split("@"); */
    /* console.log(data.email); */
    setTimeout(()=> {
      signOut();
    }, 3600000);
    
    const signOut = () =>{
      $(".logout").trigger('click');
      localStorage.clear();
      sessionStorage.clear();
   
      window.location.href = '/';
    }

  const handleLogout = async (e) => {
    e.preventDefault();
    /* let data = sessionStorage.getItem('user');
    data = JSON.parse(data);
    console.log(data.email); */
    $(".logout").trigger('click');
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/'
  };

  return (
  
    <div><header className=" sticky-top dashboard-header">
    <nav className="container navbar navbar-expand-lg navbar-light">
  
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
 
  
   <div className="ml-auto">
   <ul className="navbar-nav ">
     
   <li>
      {str} | {role}
     </li>
     &nbsp;
     &nbsp;
     &nbsp;
     <li>
     <a href="/" onClick={handleLogout} >Logout </a>
     </li>
   </ul>
   </div>
 </nav>

    </header></div>
  )
}

/* $(document).ready(function(){
  
  var intials = fname.charAt(0) + lname.charAt(0);
  var profileImage = $('#profileImage').text(intials);
}); */
export default DashboardNav;