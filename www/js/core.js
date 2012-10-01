var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        initPushwoosh();

        app.report('deviceready');
        
		// onError Callback receives a PositionError object
		//
		function onError(error) {
			alert('code: '    + error.code    + '\n' +
				  'message: ' + error.message + '\n');
		}
		
		// navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },
    report: function(id) {
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        // document.querySelector('#' + id + ' .pending').className += ' hide';
        //var completeElem = document.querySelector('#' + id + ' .complete');
        //completeElem.className = completeElem.className.split('hide').join('');
    }
};
