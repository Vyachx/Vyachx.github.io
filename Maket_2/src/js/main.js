function ready() {
    function classToggle() {
        document.getElementsByClassName('content-body__item').classList.toggle('content-item_open');
    }
    document.getElementsByClassName('content-item__arrow').addEventListener('click', classToggle);
}
document.addEventListener("DOMContentLoaded", ready);