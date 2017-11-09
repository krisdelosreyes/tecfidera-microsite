$(document).ready(function(){
	$('#homeModal').modal('show');

	$( "ul.desktop-footer-links li:nth-child(2), ul.mobile-footer-links li:nth-child(2)" ).click(function() {
		$("ul.desktop-footer-links li:nth-child(3), ul.mobile-footer-links li:nth-child(3)").removeClass("modal-activelink");
		$('#tecFideraInfoModal').modal('show');
		$('#aboutBiogenModal').modal('hide');
		$(this).addClass("modal-activelink");

	});

	$( "ul.desktop-footer-links li:nth-child(3), ul.mobile-footer-links li:nth-child(3)" ).click(function() {
		$("ul.desktop-footer-links li, ul.mobile-footer-links li:nth-child(2)").removeClass("modal-activelink");
		$('#aboutBiogenModal').modal('show');
		$('#tecFideraInfoModal').modal('hide');
		$(this).addClass("modal-activelink");
	});

	$( ".footer-categories .footerelement:nth-child(1)" ).click(function() {
		$(".footer-categories .footerelement:nth-child(2)").removeClass("modal-activelink");
		$('#tecFideraInfoModal').modal('show');
		$('#aboutBiogenModal').modal('hide');
		$(this).addClass("modal-activelink");
	});

	$( ".footer-categories .footerelement:nth-child(2)" ).click(function() {
		$(".footer-categories .footerelement:nth-child(1)").removeClass("modal-activelink");
		$('#aboutBiogenModal').modal('show');
		$('#tecFideraInfoModal').modal('hide');
		$(this).addClass("modal-activelink");
	});





	$("ul.desktop-footer-links, ul.mobile-footer-links").hover(function() {
			 $(this).css('cursor','pointer');
	 });
});
