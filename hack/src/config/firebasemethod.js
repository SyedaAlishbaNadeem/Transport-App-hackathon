import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, ref, push, set,  onValue } from "firebase/database";









const auth = getAuth();
const db = getDatabase();

//authentication and database both are doing here

let signUpUser = (obj) => {
let{ email, password} = obj;



return new Promise((resolve, reject) => {
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
const postListRef = ref(db, 'users/');
const newPostRef = push(postListRef);
set(newPostRef, obj)
//this reolve will tell that user has created
// resolve('user created successfully ');
 })
 .then(() =>{
  //this resolve will tell that data has sent to db 
resolve('user created successfully and send to database');
console.log('success');
})
.catch((error) =>{
  reject(error);
})

.catch((error) => {
reject(error);
    
  });
})



}









let loginUser = (obj)=> {

  let {email, password} = obj;

  return new Promise(( resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
const starCountRef = ref(db, 'users/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  //send data with name of data at login page
resolve(data)
});

  })
  .catch((error) => {
reject(error);
  });

      })

}





let sendData = (obj, nodeName)=> {
  const postListRef = ref(db, `${nodeName}/`);
  const newPostRef = push(postListRef);
  set(newPostRef, obj );
}



// let sendData = (obj)=> {
//   const postListRef = ref(db, `students/`);
//   const newPostRef = push(postListRef);
//   set(newPostRef, obj );
// }


// let getData= () => {
//   const db = getDatabase();
//   const starCountRef = ref(db, 'students/');
//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
// console.log(data);
// setList([...Object.values(data)]); 

// // setKey([...Object.keys(data)]);
//   });

// }



let signoutuser = () => {
  return new Promise(( resolve, reject) => {
    signOut(auth).then(()=>{
      resolve(auth)
    }).catch((error)=>{
reject(error)
    })
  })
}






export { signUpUser, loginUser, sendData, signoutuser } ;

