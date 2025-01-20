async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve();
        }, 1000);
    });
}

async function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data processed");
            resolve();
        }, 1000);
    });
}

function displayData() {
    console.log("Data displayed");
}

async function handleData() {
    await fetchData(); 
    await processData(); 

    displayData();
}

handleData().catch((error) => {
    console.error("An error occurred:", error);
});
