function ask(quietion, yes, no) {
    if (quietioin()) yes() 
        else no();
}

function showOk() {
    console.log("You agreed")
}

function showCancel() {
    console.log("You canceled the excution!")
}

ask("Do you agree?", showOk, showCancel);