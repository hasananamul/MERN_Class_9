const student = [
  {
    Roll: 1,
    Name: "Rafinul Islam",
    Location: "Madaripur",
    Age: 14,
    Gender: "Male",
    bn: 90,
    en: 78,
    math: 82,
    ss: 69,
    s: 79,
  },
  {
    Roll: 2,
    Name: "Jubayer Akon",
    Location: "Madaripur",
    Age: 22,
    Gender: "Male",
    bn: 70,
    en: 88,
    math: 72,
    ss: 79,
    s: 69,
  },
  {
    Roll: 3,
    Name: "Poliya Akter",
    Location: "Dhaka",
    Age: 19,
    Gender: "Female",
    bn: 87,
    en: 85,
    math: 90,
    ss: 84,
    s: 80,
  },
  {
    Roll: 4,
    Name: "Zahin Akon",
    Location: "Italy",
    Age: 7,
    Gender: "Male",
    bn: 80,
    en: 78,
    math: 66,
    ss: 77,
    s: 68,
  },
  {
    Roll: 5,
    Name: "Tanbir Akon",
    Location: "Madaripur",
    Age: 18,
    Gender: "Male",
    bn: 67,
    en: 78,
    math: 77,
    ss: 67,
    s: 7,
  },
];
//convert to JSON
let studentJson = JSON.stringify(student);
//return from JSON to Object
console.log(JSON.parse(studentJson));
//set to local sorage
localStorage.setItem(
  "allStudents",
  '[{"Roll":1,"Name":"Rafinul Islam","Location":"Madaripur","Age":14,"Gender":"Male","bn":90,"en":78,"math":82,"ss":69,"s":79},{"Roll":2,"Name":"Jubayer Akon","Location":"Madaripur","Age":22,"Gender":"Male","bn":70,"en":88,"math":72,"ss":79,"s":69},{"Roll":3,"Name":"Poliya Akter","Location":"Dhaka","Age":19,"Gender":"Female","bn":87,"en":85,"math":90,"ss":84,"s":80},{"Roll":4,"Name":"Zahin Akon","Location":"Italy","Age":7,"Gender":"Male","bn":80,"en":78,"math":66,"ss":77,"s":68},{"Roll":5,"Name":"Tanbir Akon","Location":"Madaripur","Age":18,"Gender":"Male","bn":67,"en":78,"math":77,"ss":67,"s":7}]'
);

const devsData = [
  {
    ID: 1,
    name: "Hasan",
    Skill: "MERN stack",
    Sallery: 9000,
  },
  {
    ID: 2,
    name: "Poliya",
    Skill: "Wordpress",
    Sallery: 6000,
  },
  {
    ID: 3,
    name: "Rafin",
    Skill: "Laravel",
    Sallery: 5000,
  },
  {
    ID: 4,
    name: "Tanbir",
    Skill: "Go-lang",
    Sallery: 7000,
  },
  {
    ID: 5,
    name: "Jubayer",
    Skill: "Wordpress",
    Sallery: 7000,
  },
  {
    ID: 6,
    name: "Zahin Akon",
    Skill: "MERN Stack",
    Sallery: 10000,
  },
];
console.log(devsData);

//all devs convert to JASON data
let devsJson = JSON.stringify(devsData);
console.log(devsJson);

//all devs data set to local storage
localStorage.setItem(
  "devsDatata",
  '[{"ID":1,"name":"Hasan","Skill":"MERN stack","Sallery":9000},{"ID":2,"name":"Poliya","Skill":"Wordpress","Sallery":6000},{"ID":3,"name":"Rafin","Skill":"Laravel","Sallery":5000},{"ID":4,"name":"Tanbir","Skill":"Go-lang","Sallery":7000},{"ID":5,"name":"Jubayer","Skill":"Wordpress","Sallery":7000},{"ID":6,"name":"Zahin Akon","Skill":"MERN Stack","Sallery":10000}]'
);

//all devs data get from local storage as JSON
let returnDevsData = localStorage.getItem("devsDatata");
//all devs data get from local storage as object
console.log(JSON.parse(returnDevsData));

//family phone book

const contactList = [
  {
    Name: "Hasan Anamul",
    PhoneNumber: +6587323710,
    Adress: "Sinapore",
    Relation: "Owner",
  },
  {
    Name: "Poliya Akter",
    PhoneNumber: "+880170719........",
    Adress: "Bangladesh",
    Relation: "Love",
  },
  {
    Name: "Tanbir Akon",
    PhoneNumber: "+8801741191776",
    Adress: "Bangladesh",
    Relation: "Brother",
  },
  {
    Name: "Jubayer Akon",
    PhoneNumber: "+8801709533126",
    Adress: "Bangladesh",
    Relation: "Brother",
  },
  {
    Name: "Shahin Akon",
    PhoneNumber: "+962373739782",
    Adress: "Italy",
    Relation: "Brother",
  },
  {
    Name: "Lotif Munshi",
    PhoneNumber: "+603662732867",
    Adress: "Malayshiya",
    Relation: "Mama",
  },
  {
    Name: "Tahmina",
    PhoneNumber: "+8801748602277",
    Adress: "Bangladesh",
    Relation: "Sister",
  },
  {
    Name: "Abdur Rahman",
    PhoneNumber: "+8801732148515",
    Adress: "Bangladesh",
    Relation: "Brother",
  },
];
//contact list convert to JASON
let contactJson = JSON.stringify(contactList);
console.log(contactJson);
//All Data JSON
const allData = [studentJson, devsJson, contactJson];
console.log(allData);
