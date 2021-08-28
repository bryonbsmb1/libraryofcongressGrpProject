var url = "https://www.loc.gov/search/?q="
var endUrl = 'fo=json'
var myData
var testButton = document.getElementById('test')

//https://www.loc.gov/search/?q=baseball&fo=json
var myPlace = "Chicago" // this will be the value of our text input from html

// array of 8 items data.programs.items
fetch(url + myPlace + '&' + endUrl).then(function(response){
    response.json().then(function(data){
        console.log(data)
        myData = data
    })
})

function changePage(){
   // console.log(myData.programs.items)
}


    
//this will be event listener
testButton.addEventListener('click', changePage)