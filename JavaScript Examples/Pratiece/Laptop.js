function laptop(brand, model, color, OSversion, ram, hdd, price){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.OSversion = OSversion;
    this.ram = ram;
    this.hdd = hdd;
    this.price = price;
    }
    
    var dell = new laptop ("Dell", "Inspiron-15-3000", "Black", "Win-10", "4GB", "500GB", 24000);
    var hp = new laptop("HP", "Speark-1500", "White", "Win-8.1", "3GB", "500GB", 23000);
    var lenove = new laptop("Lenove", "Gron-500", "Blue", "Lunix", "6GB", "1TB", 30000);
    var hp1 = new laptop("HP", "Speark-1500", "White", "Win-8.1", "6GB", "1TB", 35000);

    var laptops = [];
    laptops.push(dell);
    laptops.push(hp);
    laptops.push(lenove);
    laptops.push(hp1);

//console.log(laptops);

var name = getLapName(laptops);
console.log(name);
function getLapName(laptops){
    let list = [];
    for(var i = 0; i < laptops.length; i++){
        var la = laptops[i];
        //console.log(la);
        if(la.brand === 'HP'){
            list.push(la); 
        }   
    }
    return list; 
}

var lap = laptops.filter(laps => laps.brand === "HP");
//console.log(lap);

var la = laptops.filter(lap => lap.price >= 24000  );
//console.log(la);
    