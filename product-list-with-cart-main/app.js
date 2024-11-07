
const addBut = document.querySelectorAll(".add-but")
const itemsValue = document.getElementById("itemsValue")
const empty = document.querySelectorAll(".empty")
const itemsContainer = document.querySelector(".items")

class Desser {
    constructor(type,name,price){
        this.type = type;
        this.name = name;
        this.price = price;
    }
}

const waffle = new Desser("Waffle","Waffle with Berries", 6.50);
const vanillaBean = new Desser("Creme Brulee","Vanilla Bean Creme Brulee",7.00);
const macaron = new Desser("Macaron","Macaron Mix of Five",8.00);
const classicTiramisu = new Desser("Tiramisu","Classic Tiramisu", 5.50);
const pistachio = new Desser("Baklava", "Pistachio Baklava", 4.00);
const lemon = new Desser("Pie", "Lemon Meringue Pie", 5.00);
const red = new Desser("Cake", "Red Velvet Cake", 4.50);
const salted = new Desser("Brownie", "Salted Caramel Brownei", 5.50);
const vanillaPanna = new Desser("Panna Cotta", "Vanila Panna Cotta", 6.50);

addBut.des = [waffle,vanillaBean,macaron,classicTiramisu,pistachio,lemon,red,salted,vanillaPanna]

itemsValue.count = 0

addBut.forEach(function(elem,index,count){
    count = 0;

    elem.addEventListener("click",()=>{
        addItem()
       console.log(addBut.des[index])
       count++;
       itemsValue.count += count
        elem.classList.add("added");
        elem.innerHTML = count;
        itemsValue.innerHTML = itemsValue.count
       empty.forEach(function(x){
        x.style.display = 'none';
       })
    })
})
function addItem(){
    const newDiv = document.createElement("div");
    itemsContainer.appendChild(newDiv);
    newDiv.className = "order-item";

}