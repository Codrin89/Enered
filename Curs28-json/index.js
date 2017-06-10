	 $(".check").change(function() {
        if($(this).prop('checked') == true) {
            $(this.parentElement).find('span').html('Selected');
        } else{
        	$(this.parentElement).find('span').html('Select for download');
        }
    });


