let cookieStoreOne = {
    name: "ButterCo Store",
    product: "Butter Cookie",
    customers: 100,
    employees: 10,
    location: "Silver Spring",
    addEmployees = function() {
        if ((this.customers % this.employees) > this.employees) {
            console.log("Hire new employee");
        }
    }
};

let cookieStoreTwo = {
    name: "AnimalCo Store",
    product: "Animal Cookie",
    customers: 75,
    employees: 5,
    location: "Bethesda",
    getCustomers = function () {
        console.log(this.customers);
    }
};

let cookieStoreThree = {
    name: "VanillaCo Store",
    product: "Vanilla Cookie",
    customers: 55,
    employees: 5,
    location: "RockVille",
    getLocation = function () {
        console.log(this.location);
    }
}

let storeList = document.getElementsByTagName(ol);
let storeOne = document.getElementById("ButterCo");
storeList.appendChild(storeOne);
storeOne.textContent = cookieStoreOne;

let storeTwo = document.getElementById("AnimalCo");
storeList.appendChild(StoreTwo);
storeTwo.textContent = cookieStoreTwo;

let storeThree = document.getElementById("VanillaCo");
storeList.appendChild(storeThree);
storeThree.textContent = cookieStoreThree;