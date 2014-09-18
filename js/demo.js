$(function() {
  var $words = [
    {
      word: "terrestrial",
      definition: "of, on, or belonging to the earth"
    }, {
      word: "superficial",
      definition: "existing or occurring at or on the surface"
    }, {
      word: "scarcely",
      definition: "only just; almost not"
    }
  ]


  $('.define').definitions( {
    term : $words
  });

});