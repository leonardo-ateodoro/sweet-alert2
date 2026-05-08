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


    document.getElementById('alertConfirm').addEventListener('click', function() {
        Swal.fire ({
            title: 'Você tem certeza?',
            text: "Esta ação é irreversível!",
            icon:'question',
            showCancelButton: true,
            confirmButtonText: 'Sim,prosseguir!',
            cancelButtonText:'Cancelar'        
        
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Confirmado!', 'Você confirmou a ação. ','success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelado', 'A ação foi cancelada', 'error');
            }
        }); 
    });
    document.getElementById('alertInput').addEventListener('click',function() {
        Swal.fire({
            title: 'Digite seu nome',
            input:'text',
            inputPlaceholder:'Seu nome aqui',
            showCancelButton: true,
            confirmButtonText:'Enviar',
            cancelButtonText:'Cancelar'
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                Swal.fire(`Olá, ${result.value}!`,'Seu nome foi recebido.','sucess');
            }
        });
    });

    document.getElementById('alertTimer').addEventListener('click', function(){
        
    })
