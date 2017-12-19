const $form = $('#suscribeform')
const $formgroup = $form.find('.form-group')
const $formcontrol = $formgroup.find('.form-control')

$form.submit(function (ev){
	ev.preventDefault()
	const error = Math.random() > 0.5
	$formgroup.removeClass().addClass('form-group')
	$formcontrol.removeClass().addClass('form-control')
	$formgroup.addClass(error ? 'has-danger' : 'has-success')
	$formcontrol.addClass(error ? 'form-control-danger' : 'form-control-success')
	$formgroup.find('.form-control-feedback').remove()

	var el;
	if (error) {
		el = $('<div>', {html: 'Ha ocurrido un error'})
	} else {
		el = $('<div>', {html: 'Te enviaremos todoas las novedades'})
	}
	el.addClass('form-control-feedback')
	$formgroup.append(el)
})
//el true en string se conbiete a boleano con json
function mostrarModal(){
	const noMostrarModal = JSON.parse(localStorage.noMostrarModal)
	if (!noMostrarModal){
		$('#modalOferta').modal()
	}
	//cuando se haga click en el boton de no registrar en localStorage va guardar el valor de true en string
	$('#btnNoRegistrar').click(function (ev){    
		localStorage.noMostrarModal = true 
	})
}
const $filtrosToggle = $('#filtrosToggle')
$filtrosToggle.click(function (ev) {
	ev.preventDefault() //evita que se ejecute la navegacion con el # en la url 

	const $i = $filtrosToggle.find('i.fa')
	const isDown = $i.hasClass('fa-chevron-down')
	if (isDown) {
		$i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
	}	else {
		$i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
	}
})