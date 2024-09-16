const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        (document.querySelector('.ativo')).classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})