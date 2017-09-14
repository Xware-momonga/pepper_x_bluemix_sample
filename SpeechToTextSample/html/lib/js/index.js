$(document).ready(function() {
	QiSession(function(session) {
		session.service('ALMemory').then(function(ALMemory){

			/**
			 * <--SUBSCRIBER-->
			 *
			 * 翻訳する文字列を表示します。
			 */
			ALMemory.subscriber('speech_to_text_sample/output').then(function(sub) {
				sub.signal.connect(function(text){
					$('#transcript').html(text);
				});
			});
		});
	});
});