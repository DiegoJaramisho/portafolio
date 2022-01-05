const ruta = 'http://127.0.0.1:9000'
console.log('a')

let contactForm = document.getElementById('contact_form')
let name = document.getElementById('form_name')
let email = document.getElementById('form_email')
let subject = document.getElementById('form_subject')
let message = document.getElementById('form_message')


function test(){
    let name = document.getElementById('form_name').value
    console.log(name)
}

// fetch('/',{
//     method: 'post',
//     headers: {
//         'content-type': 'application/json',
//         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
//     }, body: {
//         // name,
//         // // email,
//         // subject,
//         // message,
//     }

// })
// .then(response => response.json())
// .then(data => console.log(data));
$('#contact_form').validator();
// document.getElementById('contact_form').validator();
// contactForm.validator()
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log('....')
}, false);



// $('#contact_form').on('submit', function (e) {
//     if (!e.isDefaultPrevented()) {
//         return false;
//     }
// });
