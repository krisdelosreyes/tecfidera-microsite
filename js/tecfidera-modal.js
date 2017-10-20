$(document).ready(function(){
	$('#homeModal').modal('show');

	$( "ul.desktop-footer-links li:nth-child(2), ul.mobile-footer-links li:nth-child(2)" ).click(function() {
		$('#tecFideraInfoModal').modal('show');
		$('#aboutBiogenModal').modal('hide');
	});

	$( "ul.desktop-footer-links li:nth-child(3), ul.mobile-footer-links li:nth-child(3)" ).click(function() {
		$('#aboutBiogenModal').modal('show');
		$('#tecFideraInfoModal').modal('hide');
	});

	$("ul.desktop-footer-links, ul.mobile-footer-links").hover(function() {
			 $(this).css('cursor','pointer');
	 });
});
