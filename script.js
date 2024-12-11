setTimeout(
    function () {
        console.log("Ferdig aa laste")
    }, 
    10000
);

function delay(ms) {
    return new Promise(function (resolve) {
           setTimeout(resolve, ms);  
            
           
    });
};

async function timeout () {
    console.log("Noe kommer til og skjedd");
    await delay(5000);
    console.log("Noe har skjedd");
}

timeout();

//
//

const myCatsFacts = ["Cats are the best", "Cats are just small lions"];

console.log(myCatsFacts[0]);

for (let index = 0; index < myCatsFacts.length; index++) {
    console.log(myCatsFacts[index]);
};

//
//

async function getApiData () {
    const response = await fetch("http://catfact.ninja/facts");
    console.log(response);

    const data = await response.json();
    console.log(data.data[3].fact);

}

getApiData();