jQuery('#f').validate(
    rules:{
        name:"required",
        message:{
            required:true,
            minlength: 100,
        },



    },messages:{
        name:"please enter your name",
        message:"required",

    },
 submitHandler= (form) => {
        form.submit();
    }

    )