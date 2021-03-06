//sample data modified from randomUser.me

var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
      },
      "nat": "DE"
    }
  ]
}

function getUserObj(){
    return new Promise(function(resolve, reject) {
      $.ajax({
          url: 'https://randomuser.me/api/'
      })
      .then(function(dataResolved){
          resolve(dataResolved)
      })
    })
}


getUserObj().then(function(dataResolved) {

    var userHTML = $('#results-portal').html();

    //handlebars step two: compile it into a template
    var userTEMP = Handlebars.compile(userHTML);

    //handlebars step three:render the HTML by passing the data to the template
    var userOUTPUT = userTEMP(dataResolved);
    console.log(userOUTPUT);

    //handlebars step four: put the     complete HTML into the DOM
    $('#displayResults').append(userOUTPUT);
})
//handlebars step one: grap the html from the script tag
