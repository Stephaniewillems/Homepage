$(document).ready(function(){
	$('#filters a').click(function(e){
		e.preventDefault();
		console.log($(this).attr('data-filter'));
		var filter = $(this).attr('data-filter');
		$('.project-overlay').removeClass('active');
		$('.portfolio-item').each(function(){
			if($(this).attr('filter') == filter){
				$(this).find('.project-overlay').addClass('active');
			}
		})

	})
})