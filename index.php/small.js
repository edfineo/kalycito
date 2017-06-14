jQuery.noConflict();

			(function($){

				$(document).ready(function()

				{

					if ($('body').hasClass('avatar-responsive'))

					{

						var mainMenu = $('.at-main-menu > ul');

						var mainMenWrap = $ ('.at-main-menu');

						

						mainMenWrap.find('span.menu-pull').click(function(event){

							$(this.getParent()).find('ul:first').slideToggle();

						});

						

						mainMenu.find('li > span.pull').click(function(event){

							$(this.getParent()).find('ul:first').slideToggle();

						});

						

						$(window).resize(function(){

							if($(window).width() > 767) {

								mainMenu.find('ul').removeAttr('style');

							}

						});

						function at_responsive_transfer(){				

							var at_default_width = 1000;

							if($(window).width() < at_default_width){

								$('.block-default-width').addClass('block-max-width-100');

								$('.block-default-width').addClass('block-default-width-tmp');

								$('.block-default-width-tmp').removeClass('block-default-width');

							}

							else{

								$('.block-default-width-tmp').removeClass('block-max-width-100');

								$('.block-default-width-tmp').addClass('block-default-width');

								$('.block-default-width').removeClass('block-default-width-tmp');

							}			

						}		    

						at_responsive_transfer();			

						$(window).resize(function(e){		    	

							at_responsive_transfer();		    

						});

					}

				});

			})(jQuery)

		

			

				