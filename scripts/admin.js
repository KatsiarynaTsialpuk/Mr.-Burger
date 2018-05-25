// $('.form__wrapper').on('submit', orderForm);
//
// function orderForm(event) {
//     event.preventDefault();
//
//     let form = $(event.target);
//     let data = form.serialize();
//     let type = form.attr('method');
//     let url = form.attr('action');
//
//     ajaxForm(form).done(function (message) {
//         let text = message.text;
//         let status = message.status;
//
//         if (status === 'OK') {
//             form.append('<p class="form__success">' + text + '</p>');
//         } else {
//             form.append('<p class="form__error">' + text + '</p>');
//         }
//     }).fail(function (jqXHR, textStatus) {
//         alert('Request failed:' + textStatus);
//     });
//
// };
//
// let ajaxForm = function (form) {
//     let data = form.serialize();
//     let type = form.attr('method');
//     let url = form.attr('action');
//
//     return $.ajax({
//         type: type,
//         url: url,
//         data: data,
//         dataType: 'JSON'
//     })
// };

    const form = document.querySelector('.form__wrapper');
    const orderBtn = document.querySelector('.form__btn');
    orderBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const modal = document.querySelector('.modal');
        modal.classList.add('modal__active');
    });

            // let request = $.ajax({
            //     type: type,
            //     url: url,
            //     data: data,
            //     dataType: 'JSON'
            // });

            // request.done(function (message) {
            //     let text = message.text;
            //     let status = message.status;
            //
            //     if (status === 'OK') {
            //         const modal = document.querySelector('.modal');
            //         modal.classList.add('modal__active');
            //     }
            // });
            //
            // request.fail(function(jqXHR, textStatus) {
            //     alert('Request failed:' + textStatus);
            // });