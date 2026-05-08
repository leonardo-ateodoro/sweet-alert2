document.getElementById('alertBasico').addEventListener('click', function() {
    Swal.fire('Alerta Básico!', 'Este é um alerta simples.', 'question')
});
    document.getElementById('alertSucesso').addEventListener('click', function() {
        Swal.fire('Sucesso!','A operação foi concluida com sucesso.', 'success');
});

    document.getElementById('alertErro').addEventListener('click', function () {
        Swal.fire('Erro!', 'Algo deu errado, tente novamente.', 'error');
    
    });

    document.getElementById('alertAviso').addEventListener('click', function () {
        Swal.fire ('Atenção!', 'Verifique os dados informados.','warning');
    });

    document.getElementById('alertInfo').addEventListener('click', function() {
        Swal.fire('Informação', 'Este é um alerta de informação.','info');   
    });

    