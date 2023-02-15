
$(document).ready (function(){

    //Password eye togle
    $(function () {
        $("#toggle_pwd").click(function () {
            $(this).toggleClass("fa-eye fa-eye-slash");
           var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
            $("#txtPassword").attr("type", type);
        });
    })

    // Email & Password validations
    $('#email').change(function(event){
        const validationPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if(validationPattern.test($(this).val())){
                showFormAlertSuc('Valid Email');
            }else{
                showFormAlert('Not a valid email');
            }
    })

    $('#txtPassword').change(function(event){
        const ValidatePass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
            if(ValidatePass.test($(this).val())){
                showFormAlertSuc('Strong Password');
            }else{
                showFormAlert('Must use strong Password');
            }
    })
    

    // Next & Submit button validations
    $('#step1Sub').click(function(event){
        event.preventDefault();
        if($('#name').val() == '' || $('#email').val() == '' || $('#password').val() == ''){
            showFormAlert('Please complete the form')
        } else{
            $('#step1').fadeOut(500, function(){
                $('#step2').fadeIn(300)
            })
            $('#stepCount').text('2')
        }
    })

    $('#step2Sub').click(function(event){
        event.preventDefault();
        if($('#country').val() == '' || $('#state').val() == '' || $('#address').val() == ''){
            showFormAlert('Please complete the form')
        } else{
            $('#step2').fadeOut(500, function(){
                $('#step3').fadeIn(300)
            })
            $('#stepCount').text('3')
        }
    })

    $('#step3Sub').click(function(event){
        event.preventDefault();
        if($('#phone').val() == ''){
            showFormAlert('Please complete the form')
        } else{
            $('#userName').text($('#name').val())
            $('#userEmail').text($('#email').val())
            $('#userPhone').text($('#phone').val())
            $('#userState').text($('#state').val())
            $('#userCountry').text($('#country').val())


            $('#form').fadeOut(500, function(){
                $('#formConfirm').fadeIn(300)
            })
        }
    })

    // Country and state arrays
    const states = {
        Sri_Lanka : ['Northern', 'North Western', 'Western', 'Central', 'NorthCentral', 'Sabaragamuwa', 'Eastern'],
        India : ['mumbai', 'dillhi'],
        China : ['beigin', 'shanghi', 'whuhan']
    }

    $('#country').change(function () {
        $('#state').find('option').remove().end().append('<option selected>Select State</option>');
        let country = $('#country').val()
        for(let i = 0; i < states[country].length; i++) {
            $('#state').append('<option value="'+states[country][i]+'">'+states[country][i]+'</option>')
        }
    })

    // Custom build functions
    function showFormAlert(message){
        $('#formAlert').text(message).show(400)
        setTimeout(function() {
            $('#formAlert').hide(400)
        },4000)
    }
    function showFormAlertSuc(message){
        $('#formAlertSuc').text(message).show(400)
        setTimeout(function() {
            $('#formAlertSuc').hide(400)
        },4000)
    }


});




    // -----------------For Learning Perposes-------------------------------------------------

    // $('.psss-show').on('click', function(){
    //     $(this).hide();
    //     $('.pass-hide').show();
    // });

    // $('.psss-hide').on('click', function(){
    //     $(this).hide();
    //     $('.pass-show').show();
    // });


     // $('#name').change(function(event){
    //     if($(this).val().length < 10){
    //         showFormAlert('too short');
    //     }else{
    //         const validationPattern = /(\w+\s\w+)(\s?\w+)+/;
    //         if(validationPattern.test($(this).val())){
    //             showFormAlertSuc('Valid Name');
    //         }else{
    //         showFormAlert('Not a valid Name');
    //         }
    //     }  
    // })


    // $('#formBtn').click (function(e){
    //     e.preventDefault()
    //     console.log('name - ', $('#name').val())
    //     console.log('email - ', $('#email').val())
    //     console.log('password - ', $('#txtPassword').val())

    // })

    // ------------------------------------------------------------------------------