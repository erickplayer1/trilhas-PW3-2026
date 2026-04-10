async function login(){
    console.log("Dentro da funcçao login");


   const email = document.getElementById("email").value
   const password = document.getElementById("password").value

   console.log("Email:", email);
   console.log("Password:", password); 

   const responde = await fetch("http://localhost:3000/api/login/login"),{
    method: Post('login')
    headers:{
        "Content-Type:" "application/json" } 
        
    }
body: JSON.stringify({email,password})

   
}