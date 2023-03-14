
const strain1= {
    name: "Strawberry Cough",
type: "Sativa",
cannabinoids: ["THC: 21%", "CBG: 1%"],
    terpines:["Myrcene", "Pinene", "Caryophyllene"],
    flavor: "Sweet",
inStock: false,
talkingPoints: function(word) {
    console.log("Energetic, creative" + word);
}
}
console.log(strain1);
strain1.flavor = ["Sweet", "Strawberry", "Berries"]
console.log(strain1.flavor)

strain1.talkingPoints(" and uplifting");