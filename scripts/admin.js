// const form = document.querySelector('.form__wrapper');
// const orderBtn = document.querySelector('.form__btn');
//
// orderBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//
//     const modal = document.querySelector('.modal');
//     modal.classList.add('modal__active');
// });
//
// closeBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//
//     const modal = document.querySelector('.modal');
//     modal.classList.remove('modal__active');
// });


class SendForm {
    constructor(selector) {

        this.form = document.querySelector(selector);
        this.method = this.form.getAttribute('method') || 'POST';
        this.action = this.form.getAttribute('action') || 'server.php';

        this.form.addEventListener('submit', event => {
            event.preventDefault();

            this.sendForm();
        });
    }

    sendForm() {
        this.ajaxForm();
    }

    async ajaxForm() {
        const name = this.form.querySelector('input[name="user-name"]').value;
        const phone = this.form.querySelector('input[name="phone"]').value;
        const street = this.form.querySelector('input[name="street"]').value;
        const house = this.form.querySelector('input[name="house"]').value;
        const building = this.form.querySelector('input[name="building"]').value;
        const flat = this.form.querySelector('input[name="flat"]').value;
        const floor = this.form.querySelector('input[name="floor"]').value;
        const message = this.form.querySelector('textarea[name="message"]').value;
        const delivery = this.form.querySelector('input[name="delivery"]').value;
        const card = this.form.querySelector('input[name="card"]').value;
        const dontdisturb = this.form.querySelector('input[name="dont-disturb"]').value;

        const data = `name=${name}&phone=${phone}&street=${street}&house=${house}&building=${building}&flat=${flat}&floor=${floor}&message=${message}&delivery=${delivery}&card=${card}&dont-disturb=${dontdisturb}`;

        const res = await fetch(this.action, {
            method: this.method, body: data, headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            }
        });
        const resBody = await res.json();

        if (resBody.status === 'OK') {
            this.showPopup(true, resBody.mes);
        } else {
            this.showPopup(true, resBody.mes);
        }
    }

    showPopup(status, mes) {
        const popup = document.querySelector('#modal');
        const messBlock = popup.querySelector('.modal__text');
        const closeBtn = document.querySelector('.modal__btn');

        if (!status) messBlock.classList.add('modal__text_error');

        messBlock.textContent = mes;
        popup.classList.add('modal__active');
        closeBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const modal = document.querySelector('.modal');
            modal.classList.remove('modal__active');
        });
    }
}

const send = new SendForm('#order-form');