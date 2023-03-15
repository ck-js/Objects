
const strain1= {
    name: "Strawberry Cough",
type: "Sativa",
cannabinoids: ["THC: 21%", "CBG: 1%"],
    terpines:["Myrcene", "Pinene", "Caryophyllene"],
    flavor: "Sweet",
inStock: false,
talkingPoints: function(word) {
    console.log("Energetic, creative" + word);
},
display: function() {
    console.log(this);
},
changeAndDisplay: function() {
    this.name = "Wedding Cake";
console.log(this.name);
}
}
console.log(strain1);
strain1.flavor = ["Sweet", "Strawberry", "Berries"]
console.log(strain1.flavor)

strain1.talkingPoints(" and uplifting");
strain1.display();
strain1.changeAndDisplay();

const jsonVariable = '{}';
const jsonString = '{"Story": "Life", "Times": 2, "Fiction": true}';

const object = {
movie: "You",
year: 2020,
family: true,

}
console.log(JSON.stringify(strain1));

console.log(JSON.parse(jsonString));

const flowerJson =
'{"name": "Rose", "color": "Blue", "price": 2.5, "season": "Spring"}'; 
const flowerObject = JSON.parse(flowerJson);
flowerObject.color = "Red";
const updateJson = JSON.stringify(flowerObject);
console.log(flowerJson);
console.log(updateJson);





