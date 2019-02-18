$(document).ready(function () {
	$('#btn-img-1').prop('disabled', true);
	$('.my-button').on("click", function (e) {
		e.preventDefault();
		$('.my-button').prop('disabled', false);
		$(this).prop('disabled', true);
		var detail = $(this);
		myUrl = detail.data('image');
		$('#aids-img').attr('src', myUrl);
	});
});