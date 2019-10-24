function mobileParameteers(brand, color, price, internalMemory, ramSize, backCameraPixel, frontCamerapixel, osVerioun ){
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.internalMemory = internalMemory;
    this.ramSize = ramSize;
    this.backCameraPixel = backCameraPixel;
    this.frontCamerapixel = frontCamerapixel;
    this.osVerioun = osVerioun;
}

var m1 = new mobileParameteers ("MI", "white", 1000, "32GB", "4GB", "13MGP", "8MGP", "Android-Oreo-8.1");
var m2 = new mobileParameteers ("Oppo", "black", 3900, "64GB", "6GB", "16MGP", "13MGP", "Android-Pie-9");
var m3 = new mobileParameteers ("Iphone", "red", 1100, "128GB", "8GB", "20MGP", "16MGP", "Android-Pie-9");
var m4 = new mobileParameteers ("Samsung", "blue", 2700, "16GB", "2GB", "8MGP", "4MGP", "Android-Oreo-8");
var m5 = new mobileParameteers ("Vivo", "black", 2000, "32GB", "4GB", "13MGP", "8MGP", "Android-Oreo-8.1");

var listOfMobile = [];
listOfMobile.push(m1);
listOfMobile.push(m2);
listOfMobile.push(m3);
listOfMobile.push(m4);
listOfMobile.push(m5);

//console.log(listOfMobile);

let mobPrice = get1000To2000RupeesMobilePrize(listOfMobile)
//console.log(mobPrice);

function get1000To2000RupeesMobilePrize(listOfMobile) {
    let list = [];

    for(let i in listOfMobile){
        let mob = listOfMobile[i];
        if (mob.price > 900 && mob.price <= 2000) {
           list.push(mob);
        }
    }
    return list;
}

function getMobileNameMorethanSixlatter(listOfMobile){
    var list1=[];
    for(var i in listOfMobile){
        var mobName = listOfMobile[i];
        if(mobName.brand.length >6){
            list1.push(mobName);
        }
    }
    return list1
}

var mobileName = getMobileNameMorethanSixlatter(listOfMobile);
//console.log(mobileName);


var mobNameSearch = getMobileNameSearch(listOfMobile);
console.log(mobNameSearch);

function getMobileNameSearch(listOfMobile) {
    var list= [];    
    for(var i in listOfMobile){
        var mobName = listOfMobile[i];
        if (mobName.brand == 'MI') {
            list.push(mobName);
        }
    }
    return list;
}

var getMobileName = listOfMobile.filter(mb => mb.brand === 'Vivo');
//console.log(getMobileName);

