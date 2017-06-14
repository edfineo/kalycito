jQuery.noConflict();

			(function($){

				$(document).ready(function() {

					var goToTop = $('#avatar-go-to-top');

					goToTop.hide();

					

					// fade in #back-top

					$(function () {

						$(window).scroll(function () {

							if ($(this).scrollTop() > 100) {

								goToTop.fadeIn();

							} else {

								goToTop.fadeOut();

							}

						});

				

						// scroll body to 0px on click

						goToTop.click(function () {

							$('body,html').animate({

								scrollTop: 0

							}, 800);

							return false;

						});

					});

				});

			})(jQuery)

			</script>
