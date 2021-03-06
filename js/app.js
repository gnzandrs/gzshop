const $form = $('#suscribeForm');
const $formGroup = $form.find('.form-group');
const $formControl = $formGroup.find('.form-control');

$form.submit(function (ev) {
	ev.preventDefault();

	const error = Math.random() > 0.5;
	$formGroup.removeClass().addClass('form-group');
	$formControl.removeClass().addClass('form-control');
	$formGroup.addClass(error ? 'has-danger': 'has-success');
	$formControl.addClass(error ? 'form-control-danger': 'form-control-success');
	$formGroup.find('.form-control-feedback').remove();

	var el;
	if (error) {
		el = $('<div>', {html: 'Ha ocurrido un error' })
	} else {
		el = $('<div>', {html: 'Ten enviaremos todas las novegadedes' }) 
	}
	el.addClass('form-control-feedback');
	$formGroup.append(el);

});

function mostrarModal() {
	if (localStorage.noMostrarModal == undefined)
	{
		localStorage.noMostrarModal = false;
	}

	const noMostrarModal = JSON.parse(localStorage.noMostrarModal);

	if (!noMostrarModal) {
		$('#modalOferta').modal();
	}
	
	$('#btnNoRegistrar').on('click', function (e) {
		localStorage.noMostrarModal = true;
	});
}

const $filtrosToggle = $('#filtrosToggle');

$filtrosToggle.on('click', function (e) {
	e.preventDefault();

	const $i = $filtrosToggle.find('i.fa');
	const isDown = $i.hasClass('fa-chevron-down')

	if (isDown) {
		$i.removeClass('fa-chevron-down').addClass('fa-chevron-up');
	} else {
		$i.removeClass('fa-chevron-up').addClass('fa-chevron-down');
	}

})
