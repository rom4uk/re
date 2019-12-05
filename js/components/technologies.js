var wp7Form = document.querySelectorAll( '.wpcf7 ' );
	for (var i = 0; i < wp7Form.length; i++) {
			wp7Form[i].addEventListener( 'wpcf7submit', function( event ) {
		var 	liqpayHiddenInput = event.target.querySelector('[name="liqpay-url"]');
​
	    if (liqpayHiddenInput && liqpayHiddenInput.value) { 
	    	setTimeout(function() {
					const agent = window.navigator.userAgent.toLowerCase().indexOf('os') !== -1;
					if(agent) {
						window.location.assign(liqpayHiddenInput.value)
					} else {
						window.open(liqpayHiddenInput.value, "_blank")
					}
	    	}, 1800);
	    }
​
		}, false );
	}