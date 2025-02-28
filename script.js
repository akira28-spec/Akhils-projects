const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});

single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
            if (index === testimonialCardIndex) {
                testimonialCard.style.display = 'block';
            } else {
                testimonialCard.style.display = 'none';
            }
        });
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});
function  sendmail(){
    // alert();
    var name = $("#yourname").val();
    var email = $("#youremail").val();
    var phonenum = $("#yourphonenumber").val();
    if(name == "" || email==""|| phonenum==""){
        alert('Please fill all the fields')
    }
    else{
        // alert('done')
    
        var dataToSend = {
            name: name,
            email: email,
            phonenum: phonenum,
        };
    // console.log(dataToSend);
    $.ajax({
        url: 'http://localhost/portfolio_website_cop/mailer.php',
        type: 'POST',
        data: dataToSend,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.status === 'success') {
                alert('Email sent successfully');
            } else {
                alert('Email sending failed');
            }
        },
        error: function (xhr, status, error) {
            console.error(error);
            alert('An error occurred while sending the email');
        }
    });
}
}