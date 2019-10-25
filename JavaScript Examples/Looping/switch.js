let login = 'guest';

switch(login){
case 'guest':
    console.log('Guest User');
    break;//Break the Statement is stop the line
    case 'modertor':
            console.log('Modertor User');
            break;
            default :
                console.log('Unknow User');
                
}

let a = 2 + 2;

switch(a){
    case 1:
        console.log('Too small');
        break;
        case 2:
        console.log('Small');
        break;
        case 3:
        console.log('Too large');
        break;
        case 4:
        console.log('Exactly!');
        break;
        default :
        console.log("I don't know such values");
        break;
}

 let browser = chrome;
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }