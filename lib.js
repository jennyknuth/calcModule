module.exports = {
  add: function(x, y){
    return x + y;
  },
  
  subtract: function(x, y){
    return x - y;
  },

  multiply: function(x, y){
    return x * y;
  },

  divide: function(x, y){
    return x / y;
  },

  square: function(x){
    return x * x;
  },

  average: function(arr){
    var i       = 0,
        result  = 0;

    for (i = 0; i < arr.length; i++){
        result += arr[i];
    }
    result = result / arr.length;
    return result;
  }
}
