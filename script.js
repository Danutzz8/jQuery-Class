// $('document').ready(function() {

//     $('body').append('<h1>I love jQuery</h1>'); // add text


// })

$('document').ready(function() {

    $('h1').css('border', '1px solid grey')
    $('h1:first').css('border', '2px solid blue'); // attaching and mod a line with css or add a new line 
    $('h1:last').css('border', '2px solid red');
    $('h1:odd').css('border', '3px solid green'); // or even
    $('h1:nth-child(2n)').css('color', 'blue');

    let newText = $('<p>');
    newText.append('<h1>I just replaced something!')

    $('#textBox').html(newText)
})


$('document').ready(function() {   // on click we modified text

    $('#textBox').on('click', MouseClicked)
    $('#textBox').on('mouseleave', MouseOut)

    function MouseClicked () {
        $('#textBox').html('<h2>You clicked me!!!!')
    }

    function MouseOut () {
        $('#textBox').html('<h4>Gonne!!!!')
    }


})


$('document').ready(() => {  // show or hide a paragraph 

    $('#show').on('click', () => {
        $('.toSee').show()
    })
    $('#hide').on('click', () => {
        $('.toSee').hide()
    })

    
})

$('document').ready(() => {                  // change state on hover 
    $('.textShadow').hover(function() {
        $(this).toggleClass('highlight');       // also addClass & removeClass
    });
});


// $('document').ready(function() {                 // change state on hover 

//     $('.textShadow').hover(changeMe);

//     function changeMe() {
//         $(this).toggleClass('highlight');
//     }
// })

$('document').ready(() => {   

    $('#fade-in').on('click', () => {               // text will slowly apeare 
        $('#textP').fadeIn(2000, () => {
            alert('Done in');
        });
    });

    $('#fade-out').on('click', () => {                // text will slowly disapeare 
        $('#textP').fadeOut('fast', () => {             // --FadeToggle-- as well
            $('#fade-out').text('Gone!')
        });
    });
})

$('document').ready(() => {   // document.ready MEANS: dont run the code until the document is loaded, but with defer we can bypass

$('.reveal').click(() => {
    $('.rev').toggle()
})

})

 

    $('.dbclick').dblclick(() => { // toggle - hide/show on double click
        $('.rev').toggle()
    })
    
//    $('#btn1').on('mousedown', () => {   /// this works similar with 'click'
//        $('.textb').toggle()
//    })

//    $('#btn2').on('mouseup', () => {
//     $('.textb').toggle()
// })

    $('#btn1').on('mouseenter', () => {
       $('.textb').toggle()
     })

    $('#btn1').on('mouseleave', () => {
        $('.textb').toggle()
      })

      $('#btn2').on('mousemove', () => {
        $('.textb').toggle()
      })

      $(document).on('mousemove', (e) => {
          $('#coords').html(`Coords: Y: ${e .clientY} X: ${e.clientX}`)  // show the mousemove coordonates on X & Y axis
      })

     /*  $('input#name').focus(() => {                        // or using -this- keyword
           $('#name').css('background', 'lightgrey')
       })  */

       $('input').focus(function () {                        // but not working on ES6 and only with old function
        $(this).css('background', 'lightgrey')
    })  

    $('input').blur(function () {                        // blur is opposite to focus
        $(this).css('background', 'white')
    })  

    $('select#gender').change((e) => {              // alert will pop up on  change
        alert(e.target.value)
    })

    $('#form').submit((e) => {
        e.preventDefault();
        let name = $('input#name').val()
        $('#sub').append(` ${name}, Thanks for submitting.`)
    })


    $('#my-div').before('<h3>I\'m before the div</h3>') // also we can add text before and -->
    $('#my-div').after('<h3>I\'m after the div</h3>')   // after a chosen tag , and can be anithing.
    $('#my-div').text('Hello World - text')
    $('#my-div').html('<h2>Hello World - html</h2>')
    $('#my-div').append('<h2>Hello World - append or prepend</h2>')  // or -prepend- puts it in front
    /* alert($('#my-div').text())   // we can get elements from dom asa well */

    
   /* $('#my-div').empty();             // this will empty the intire tag 
      $('#my-div').detach();            // this will remove the intire tag */

    $('a').attr('target', '_blank')   // add an attribute or -->
    $('a').removeAttr('target', '_blank')   // remove one

    $('.wrapped-tag').wrap('<h5>') /// we can use to wrap an element in the DOM ---> wrapAll as well

    $('#newItem').keyup((e) => {           // move the inputed text on an ul list
        let code = e.which;
       if(code == 13) {
        e.preventDefault();
        $('ul').append('<li>' + e.target.value + '</li>')
    }
    })

    let arr = ['Marius', 'Yannis', 'Alexis', 'Ank'];    // iterate thru an array and put the values on a ul list

    $.each(arr, (i, val) => {
        $('#users').append(`<li>${val}</li>`)
    })

    let newArr = $('#list li').toArray();      //from ul list to an array
    $.each(newArr, (i, val) => {
       // console.log(val.innerHTML);
    })

    $('#slide-tog').click(() => {           // also --> slideUp---slideDown---and --stop-- can be used
        $('#slide').slideToggle('slow')
    })

    $('#moveRight').click(() => {
        $('#box').animate({
            left: 500,
            height: '15vh',
            width: '15vw',
            opacity: .5
        }).text('Right')
        
    });

    $('#moveLeft').click(() => {
        $('#box').animate({
            left: 0,
            height: '10vh',
            width: '10vw',
            opacity: 1
        }).text('Left')
        
    });

    $('#moveAround').click(() => {
        let box = $('#box');
        box.animate({left: 300});
        box.animate({top: 300});
        box.animate({left: 0, top: 300});
        box.animate({left: 0, top: 0});
    })