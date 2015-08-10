$(document).ready(function() {
	$(document).on("click", function () {
		if ($(".js-search").hasClass("is-active")) {
			$(".js-search").removeClass("is-active");
			$(".js-search-trigger").removeClass("is-active");
		}

	});
	function validate() {
		$('.js-validate').each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: 'has-error',
					rules: {
						username: {
							minlength: 2
						},
						any: {
							minlength: 2
						},
						password: {
							minlength: 5
						},
						confirm_password: {
							minlength: 5,
							equalTo: '#password'
						},
						email: {
							email: true
						},
						tel: {
							minlength: 2,
						},
						address: {
							minlength: 2
						},
						message: {
							minlength: 4
						},
						field: {
							required: true
						},
						// fruit: {
						//   required: true
						// }
					},
					messages: {
						firstname: 'Вас так зовут?',
						lastname: 'У вас такая фамилия?',
						fathername: 'У вас такое отчество?',
						password: {
							required: 'Введите пароль',
							minlength: 'Минимум 5 символов'
						},
						confirm_password: {
							 required: 'Пароли не совпадают',
							 minlength: 'Минимум 5 символов',
							 equalTo: 'Пароли не совпадают'
						},
						email: 'Неверный формат',
						address: 'Это Ваш адрес?',
						any: 'Заполните поле',
						company: 'Заполните поле',
						tel: {
							required: 'Заполните поле',
						},
						message: {
							required: 'Заполните поле',
							minlength: 'Заполните поле'
						}
					}
				});
			}
		});
	}
		
	validate();

	$('.dropdown-button').dropdown({
	    inDuration: 300,
	    outDuration: 225,
	    constrain_width: false, // Does not change width of dropdown to that of the activator
	    hover: true, // Activate on hover
	    gutter: 0, // Spacing from edge
	    belowOrigin: true // Displays dropdown below the button
	  }
	);

	$(".js-search-trigger").on("click", function(event) {
		$(".js-search").toggleClass("is-active");
		$(this).toggleClass("is-active");
		$(".js-search .input").trigger("click");
		event.stopPropagation();
		return false;
	});
	$(".js-search").on("click", function(event) {
		event.stopPropagation();
	});
});