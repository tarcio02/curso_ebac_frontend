

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })
    $('form').validate({
        rules: {
            naming: {required: true},
            email: {
            required: true,
            email: true},
            addres: {required: true},
        }, 
        messages: { 
            naming: 'Por Favor, isira seu nome Completo',
            email: 'Por Favor, isira seu e-mail',
            addres: 'Por Favor, isira seu endereço',
        },
        submitHandler: function(form){
            $('.msgSucess').display(block)
        }
    })

