class person {
    fullName(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    getFullName(){
       console.log(this.fname, this.lname);
    }
}

let user = new person("Venkatesh", 'Jeglee');
user.getFullName();