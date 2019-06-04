function getBg (){
    var number = Math.ceil(Math.random() * 10)
    if (number>5){
        number = number -5
    } 
    const string = 'url(\'/assets/images/' + number + '.png\')'
    
    console.log(string)
    document.getElementById('bgglobal').style.backgroundImage = string
    
    }