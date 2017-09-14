$(document).ready(function() {
	QiSession(function(session) {
		session.service('ALMemory').then(function(ALMemory){

			/**
			 * <--SUBSCRIBER-->
			 *
			 * 会話の入力を表示します。
			 */
			ALMemory.subscriber('conversation_sample/show_input').then(function(sub) {
				sub.signal.connect(function(text){
					$('#conversation-input').html(text);
				});
			});

			/**
			 * <--SUBSCRIBER-->
			 *
			 * 会話の出力を表示します。
			 */
			ALMemory.subscriber('conversation_sample/show_output').then(function(sub) {
				sub.signal.connect(function(text){
					$('#conversation-output').html(text);
				});
			});
		});
	});
});