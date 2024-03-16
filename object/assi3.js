// OBJECT
//EXAMPLE#1
var car;
car = {
    carName: "Civic",
    carModel: "Coupe",
    carMaker: "Honda",
    year: 2016,
    carColor: "Black",
};
console.log(car); // to print all properties of car
console.log("Name:", car.carName, "Color:", car.carColor); // to print the specific properties that you want
// Object OF ARRAY
//EXAMPLE#1
var studentDetails = {
    name: "Hazal",
    age: 23,
    qualification: [["S.S.C part1,part2"], ["H.S.C,part1,part2"], ["Bachelor of Public Administartion"]],
};
console.log(studentDetails);
console.log(studentDetails.name, studentDetails.qualification[0]);
console.log(studentDetails.qualification[2]);
//EXAMPLE#2
var productPortfolio;
productPortfolio = {
    brandName: "Junaid jamshad J.",
    title: "Women Collection",
    description: "To provie the best quality of product",
    varieties: ["Unstitched suit", "Stitched", "Kurti", "Sari"],
    colors: ["Black", "Navy Blue", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: 2999
};
console.log(productPortfolio);
console.log("Name:", productPortfolio.brandName, "title:", productPortfolio.title);
console.log("I like to wear", productPortfolio.varieties[2], " and the color i like the most", productPortfolio.colors[1]);
//  NESTED OBJECT
var studentInformation = {
    student_1: {
        firstName: "Ahmed",
        lastName: "khan",
        age: 22,
        depertment: "Chemistry",
        isItStudent: true,
        adress: {
            country: "Pakistan",
            city: "Karachi",
        },
        contectNumber: {
            phonoNomber: 1272737,
            emailAdress: "ahmed22@gmail.com",
        }
    },
    student_2: {
        firstName: "Wajiha",
        lastName: "Salman",
        age: 23,
        depertment: "Commerce",
        isItStudent: false,
        adress: {
            country: "Pakistan",
            city: "Karachi",
        },
        contectNumber: {
            phoneNumber: 2125637,
            emailAdress: "abc@gmail.com",
        },
    }
};
console.log(studentInformation);
console.log(studentInformation.student_1);
console.log(studentInformation.student_1.firstName, studentInformation.student_1.adress.country);
console.log(studentInformation.student_2);
console.log(studentInformation.student_2.firstName, studentInformation.student_2.contectNumber.phoneNumber);
//NESTED AND ARRAY OF OBJECT
var carBrands;
carBrands = {
    brandName: "TOYOTA",
    productPortFolio: {
        product_1: {
            name: "toyota Carolla",
            year: 2023,
            color: ["Black", "Silver", "White"],
        },
        product_2: {
            name: "Toyota Fortuner",
            year: 2020,
            color: ["Black", "White"],
        },
        product_3: {
            name: "Toyota Carmy",
            year: 2019,
            color: ["Black", "Silver", "White", "Gray"],
        },
    },
};
console.log(carBrands); // to print all the properties of carBrand
console.log(carBrands.brandName); // to print the single propertie
console.log(carBrands.productPortFolio.product_1); //to print only product_1 properties
console.log(carBrands.productPortFolio.product_2);
console.log(carBrands.productPortFolio.product_3);
console.log(carBrands.brandName, carBrands.productPortFolio.product_2.name, carBrands.productPortFolio.product_2.year, carBrands.productPortFolio.product_2.color[0]);
var brand_1 = {
    brandName: "TOYATA",
    model: "Carmy",
    year: 2022,
    color: ["Black", "White", "Gray", "silver"],
    price: undefined
};
var brand_2 = {
    brandName: "HONDA",
    model: "Honda Fortuner",
    year: 2020,
    color: ["Black", "White"],
    price: undefined
};
var brand_3 = {
    brandName: "AUDI",
    model: "Audi TT Roadster",
    year: 2018,
    color: ["White", "Black", "Red", "Gray"],
    price: undefined
};
console.log(brand_1);
console.log(brand_1.brandName, brand_1.color[0]);
console.log(brand_2.brandName, brand_2.model);
console.log(brand_3.color[3], [2]);
var product = {
    id: 25,
    name: "SmartWatch",
    price: 599,
    description: "A powerfull and feature-rich smartWatch.",
};
console.log("Product ID: ".concat(product.id));
console.log("Name: ".concat(product.name));
console.log("Price: ".concat(product.price));
console.log("Product Descrciption:".concat(product.description));
var depertment_1 = {
    depertment: "Humman Resource HR",
    otalWorkers: 14,
    anyManagerAvailable: true
};
var depertment_2 = {
    depermentName: "Supply Chain Management",
    totalWorkers: 9,
    anyManagerAvailable: false
};
var depertment_3 = {
    depertmentName: "Marketing ",
    totalWorker: 20,
    anyManagerAvailable: true,
};
console.log(depertment_1);
console.log(depertment_2.totalWorkers, depertment_2.depermentName);
console.log(depertment_3.anyManagerAvailable);
