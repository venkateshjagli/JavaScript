

var library = function(id, name, branch, year ){
    this.id = id;
    this.name = name;
    this.branch = branch;
    this.year = year;
    }
    
    var naresh = new library("A500A", "Naresh", "Agrictural", 2015);
    var chandu = new library("A501B", "Chandu", "Serictural", 2015);
    var venkob = new library("A600A", "Venkob", "Serictural", 2016);
    var venky = new library("A700B", "Venky", "Agrictural", 2017);
    var thimappa = new library("A800B", "Thimappa", "Serictural", 2019);
    
    //console.log(naresh);
    //console.log(chandu);
    
    var Librarys=[];
    Librarys.push(naresh);
    Librarys.push(chandu);
    Librarys.push(venkob);
    Librarys.push(venky);
    Librarys.push(thimappa);
    
    //console.log(Librarys);
    var li = libmain(Librarys, "Chandu");
    //console.log(li);
    
    function libmain(Librarys, name){
    
        for(var i=0; i<Librarys.length; i++){
            var lib = Librarys[i];
            if(lib.name === name){
                return lib;
            }
        }
    }
    
    var libr = Librarys.filter(libb => libb.id === "A501B");
    //console.log(libr);
     