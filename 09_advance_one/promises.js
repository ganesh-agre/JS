/*const promiseOne = new Promise(function(resolve, reject){
setTimeout(()=>{
    console.log('complete');
    resolve();
},1000)
});

promiseOne.then((value)=>{
    console.log('Promise Consumed');
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('complete');
        reject("Error");
    },1000)
    });
    
    /*promiseTwo
    .then((value)=>{
        console.log('Promise Consumed');
    })
    .catch((val)=>{
        console.log(val);
    });

    async function customPromise(){
        try{
         const response = await promiseTwo;
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }

    //customPromise();*/

/*async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data);
}

getAllUsers();*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));