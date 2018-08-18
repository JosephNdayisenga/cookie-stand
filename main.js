let cookieStoreOne = {
    name: "ButterCo Store",
    product: "Butter Cookie",
    customers: 100,
    employees: 10,
    location: "Silver Spring"
};

let cookieStoreTwo = {
    name: "AnimalCo Store",
    product: "Animal Cookie",
    customers: 75,
    employees: 6,
    location: "Bethesda" 
};

let cookieStoreThree = {
    name: "VanillaCo Store",
    product: "Vanilla Cookie",
    customers: 55,
    employees: 5,
    location: "RockVille"
};

let storeArray = [];

storeArray.push(cookieStoreOne);
storeArray.push(cookieStoreTwo);
storeArray.push(cookieStoreThree);

storeArray = [cookieStoreOne, cookieStoreTwo, cookieStoreThree];

let storeList = document.getElementById("crab-cookies");
let storeOne = document.createElement("li");
storeList.appendChild(storeOne);
storeOne.innerHTML = storeArray[0].name;

let storeTwo = document.createElement("li");
storeList.appendChild(storeTwo);
storeTwo.innerHTML = storeArray[1].name;

let storeThree = document.createElement("li");
storeList.appendChild(storeThree);
storeThree.innerHTML = storeArray[2].name;