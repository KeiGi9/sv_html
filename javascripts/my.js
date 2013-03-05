$(document).ready(function(){

    $(".s-block").click(function(){
		/*var digit=parseInt($(this).find(".digit").html());
		if($(this).hasClass("selected_block"))
		{}
		else{
			digit=digit+1;
			$(this).find(".digit").html(digit);
			$('<i class="icon ok" data-icon="&#xe0ff;"></i>').prependTo($(this));
			$(this).addClass("selected_block");
		}
		*/
		
		var digit=parseInt($(this).find(".digit").html());
		if($(this).hasClass("selected_block"))
		{
			if(digit==1)
			{
				digit=0;
				$(this).find(".digit").html(digit);
				$(this).removeClass("selected_block");
				$(this).find('.ok').remove();
			}
			
		}
		else{
				digit=digit+1;
				$(this).find(".digit").html(digit);
				$('<i class="icon ok" data-icon="&#xe0ff;"></i>').prependTo($(this));
				$(this).addClass("selected_block");
		}
			
	});
    
	
	$(".plus").click(function(){
		var digit=parseInt($(this).parent().parent().parent().find(".digit").html());
		if($(this).parent().parent().parent().hasClass("selected_block"))
		{
			digit=digit+1;
			$(this).parent().parent().parent().find(".digit").html(digit);
		}
		else{
			digit=digit+1;
			$(this).parent().parent().parent().find(".digit").html(digit);
			$('<i class="icon ok" data-icon="&#xe0ff;"></i>').prependTo($(this).parent().parent().parent());
			$(this).parent().parent().parent().addClass("selected_block");
		}
		return false;
	});

	$(".minus").click(function(){
	
		var digit=parseInt($(this).parent().parent().parent().find(".digit").html());
		
		if(digit>0)
		{
			digit=digit-1;
			$(this).parent().parent().parent().find(".digit").html(digit);
		}
		if(digit==0)
		{
			if($(this).parent().parent().parent().hasClass("selected_block"))
			{
				$(this).parent().parent().parent().removeClass("selected_block");
			}
			 $(this).parent().parent().parent().find('.ok').remove();


		}
		return false;
	});
	

	$("ul.list li a").each(function(){
		if($(this).text().length>7)
		{
			$(this).text($(this).text().substr(0, 7));
			var textmenu = $(this).text();//Добавим стиль многоточия 
			$(this).text(textmenu+'...');
		}
		
	});
	
	
	  //$('.tooltip-test').tooltip({ selector: "a" });
	  //$('.tooltip-test').tooltip();
	  $("[rel='tooltip']").tooltip();

	  $('#menu_dop ul li').click(
		function(){
			$('#menu_dop ul li a').removeClass("active_menu");
			$(this).find("a").addClass("active_menu");
			$('#panel_right').css({'display' : 'block'});	 
			
			if($(this).find("a").hasClass('settings'))
			{
				$("#login").css({'display' : 'none'});
				$("#registration").css({'display' : 'none'});
				$("#basket").css({'display' : 'none'});
				$("#settings").css({'display' : 'block'});
			}
			else if($(this).find("a").hasClass('login'))
			{
				$("#registration").css({'display' : 'none'});
				$("#basket").css({'display' : 'none'});
				$("#settings").css({'display' : 'none'});
				$("#login").css({'display' : 'block'});
			}
			else if($(this).find("a").hasClass('registration'))
			{
				$("#basket").css({'display' : 'none'});
				$("#settings").css({'display' : 'none'});
				$("#login").css({'display' : 'none'});
				$("#registration").css({'display' : 'block'});
			}
			else if($(this).find("a").hasClass('basket'))
			{	
				$("#settings").css({'display' : 'none'});
				$("#login").css({'display' : 'none'});
				$("#registration").css({'display' : 'none'});
				$("#basket").css({'display' : 'block'});
			}
	  
	  
	  });
	  
	   $('a.category').toggle(
		function(){
			$(this).addClass("active_menu");
			$('#panel_left').css({'display' : 'block'});	 
	   },
	   function(){
			$(this).removeClass("active_menu");
			$('#panel_left').css({'display' : 'none'});	 
	   }
	   
	   );
	  
	 
	  $('.back').click(
		function(){
			$('#panel_right').css({'display' : 'none'});
			$('#menu_dop ul li a').removeClass("active_menu");

	  });
	  


  });