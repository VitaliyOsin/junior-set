// End
// Success
// user received
// in promise
// last set timeout
// promise resolved


const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => {
        console.log('Success');
        callback(user);
      })
      .catch((error) => {
        console.log(error);
      });
   }
    
   getData(() => {
    console.log('user received');
    
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 500);
    
      console.log('in promise');
      setTimeout(() => {
        console.log('last set timeout');
      }, 400);
    
    });
    
    promise.then((result) => {
      console.log(result);
    })
   });
    
   console.log('End')