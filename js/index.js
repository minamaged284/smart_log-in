let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
let nameRegex = /^[a-zA-Z\s*]+$/;
let valText =  document.getElementById('validating');



let users = [];
let defaultUser = {
    signUpName : 'mina',
    signUpEmail : 'mina@gmail.com',
    signUpRepassword :'Mmin1234@',
    signUpPassword : 'Mmin1234@',
}


if (localStorage.getItem('usersArray')!=null){

    users = JSON.parse(localStorage.getItem('usersArray'));

}
users.push(defaultUser);
console.log(users);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\signup/////////////////////////////////////////

function signUp (){
   
    let signUpInfo = {

        signUpEmail : document.getElementById('userEmailU').value,
        signUpPassword : document.getElementById('userPasswordU').value,
        signUpRepassword : document.getElementById('userPasswordI-2').value,
        signUpName : document.getElementById('userNameU').value,
    }


    for(let i = 0 ; i < users.length; i++){
        if (users[i].signUpEmail.toLowerCase()===signUpInfo.signUpEmail.toLowerCase()){
            valText.innerHTML = `<p  class="val">
        <i class="fa-solid fa-circle-exclamation"></i> This user is already registered.
      </p>`;
            
        }

        else{


            if (emailRegex.test(signUpInfo.signUpEmail) == true && passRegex.test(signUpInfo.signUpPassword) == true && nameRegex.test(signUpInfo.signUpName) == true && signUpInfo.signUpRepassword===signUpInfo.signUpPassword)
            {
                valText.innerHTML ='';
                window.location = 'file:///C:/front%20end/ASSIGNMENTS/ASSIGNMENT%2010/index.html';
                users.push(signUpInfo);
        
                localStorage.setItem('usersArray' , JSON.stringify(users));
            }
            else if( nameRegex.test(signUpInfo.signUpName) == false){
                valText.innerHTML = `<p  class="val">
                <i class="fa-solid fa-circle-exclamation"></i> enter a valid name
              </p>`;
            }
            else if( emailRegex.test(signUpInfo.signUpEmail) == false){
                valText.innerHTML = `<p  class="val">
                <i class="fa-solid fa-circle-exclamation"></i> enter a valid email
              </p>`;
            }
            else if( passRegex.test(signUpInfo.signUpPassword) == false){
                valText.innerHTML = `<p  class="val">
                <i class="fa-solid fa-circle-exclamation"></i> Your password must contain one lower case litter(a), one upper case litter(A), a number(0-9), and a special character(/@-).
              </p>`;
            }
            else if(signUpInfo.signUpRepassword!==signUpInfo.signUpPassword){
                valText.innerHTML = `<p  class="val">
                <i class="fa-solid fa-circle-exclamation"></i> Make sure you entered the same password </p>`;
            }
        
        
            
        }
    }
    
    console.log(users)
}



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\LOGIN///////////////////////////////////////////////



function signIn(){
    let signInInfo = {
        signInEmail : document.getElementById('userEmailI').value,
        signInPassword : document.getElementById('userPasswordI').value,
    }
  
    for(i=0 ; i<users.length ; i++){
        if(signInInfo.signInEmail.toLowerCase()===users[i].signUpEmail && signInInfo.signInPassword===users[i].signUpPassword){

            window.location='welcome.html';
            document.getElementById('welcome').innerHTML = `<h1 class="text-light ">WELCOME </h1>`+users[i].signUpName;

        }
        else{
            valText.innerHTML = `<p  class="val">
                <i class="fa-solid fa-circle-exclamation"></i>Your email and password do not match</p>`
        }
    }

    
}

function logOut(){
    window.location = 'index.html';
}

