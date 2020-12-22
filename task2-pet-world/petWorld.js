let switches = document.querySelectorAll(".switch-list .pet-btn");
switches.forEach(button=>{
    button.addEventListener('click', ()=>{
        let name = button.dataset.name;
        document.querySelector(`.keep-on-top`).classList.toggle(`keep-on-top`);
        document.querySelector(`#${name}`).classList.toggle(`keep-on-top`);
    });
});
