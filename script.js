
  var today = dayjs();
  var hour = dayjs().hour();
  $('#currentDay').text(today.format('MMMM DD, YYYY - h:mm:ss a'));

  // console.log(today);
  // hour = 9 // use for testing when current time is out of range of schedule


  $(document).ready(function() {

  for (var i = 8; i <= 17; i++) {  
    // console.log('hour-' + i); 
    

    // adding class to render past, present or future colors to schedule

  if (i === hour) {     
      $('#hour-' + i).addClass('present');

  } else if (i < hour) {      
      $('#hour-'+ i).addClass('past');
        
  } else {
      $('#hour-' + i).addClass('future');       
    }
    }
        // add entry to local storage
    $('.saveBtn').on('click', function() {
      var textItem = $(this).siblings('.description').val();
      var timeItem = $(this).parent('div').attr('id'); 
      
      localStorage.setItem(timeItem, textItem);
      localStorage.getItem(timeItem, textItem);       
       
    })

  })







