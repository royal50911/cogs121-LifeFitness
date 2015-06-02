(function() {
  /*
  $(document).ajaxStart(function() {
    console.log("Start");
    $(".modal").addClass("loading");
  })
*/
  $.getJSON( '/delphidata')
    
    .done(function( data ) {
      //console.log(data);
      var yCounts = data.map(function(item){
        //console.log(item);
        if (item["Death Rate"] == null) {
          return 0;
        }
        return item["Death Rate"];
      });
      var xLabels = data.map(function(item){
        return item.Age
      });

      /*
      var userPics = data.users.map(function(item){
        return item.profile_picture;
      });
      */
  
      
      yCounts.unshift('Death Rate');
      xLabels.unshift('Age');
      var chart = c3.generate({
        /*
        oninit: function() {
          console.log("Done");
          $(".modal").removeClass("loading");
        },
       */
        bindto: '#chart',
        data: {
          x: 'Age',
          columns: [
            xLabels,
            yCounts,
          ],
          type: 'bar'
        },
        axis: {
          x: {
            type: 'category',   
            tick: {
              rotate: 65
            },     
          }

        }
      });
    }); 
})();
