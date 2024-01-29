**Techplement**            
This is the complete back end user registration using Mongo& Nodejs.              

# Functionalities Include:             
=> Signup, Login, Logout. Included Password Hashing.                       
=> User Profile Management.                     

# How to Run the Code & Access API in Postman:                            
#1) Clone Repository by running :: `git clone https://github.com/Kris248/Techplement.git`                             
#2) Enter cmd :: `npm install`                               
#3) Run :: `nodemon`                          
#4) a) Signup API :: `http://localhost:5000/signup`                         
    b) Login API :: `http://localhost:5000/login`                                 
    c) Logout API :: `http://localhost:5000/logout`                                   
    d) Profile Manage API :: `http://localhost:5000/update-profile`                                      

## Dummy json Data for Testing:                                       

#1) For User Authentication 👇                                     

`{                                
  "email" : "employee1@outlook.com",                                 
  "password" : "0000-0000"                                       
}`                                       
                                        
#2) For Profile Management👇                                       

`{                         
  "userId": "65b754530492d539d72c3106",                      
  "updatedProfile": {                     
    "name": "Other User",                          
    "phoneNumber": "52-5013-4225",                        
    "address": "Address 2",                         
    "gender": "FeMale"                         
  }                                
}                              
`

                                        
# ScreenShots of Backend API using 
