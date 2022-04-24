let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer',                                                                                                                                                      
   object : function() {
             console.log( "My " + this.my + " is " + this.is , "the " + this.the);
              }
  }
  obj.object(obj)
  