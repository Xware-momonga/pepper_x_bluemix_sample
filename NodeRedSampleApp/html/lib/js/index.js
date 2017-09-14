$(document).ready(function() {
	QiSession(function(session) {
		session.service('ALMemory').then(function(ALMemory){

			/**
			 * <--SUBSCRIBER-->
			 *
			 * 温度変更を監視します。
			 */
			ALMemory.subscriber('node_red_sample_app/iot_temp_change').then(function(sub) {
				sub.signal.connect(function(temp){
					$('#temperature').html(temp+'度');
				});
			});
		});
	});
});