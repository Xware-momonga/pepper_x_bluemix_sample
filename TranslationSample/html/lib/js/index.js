$(document).ready(function() {
	QiSession(function(session) {
		session.service('ALMemory').then(function(ALMemory){

			/**
			 * <--SUBSCRIBER-->
			 *
			 * 翻訳する文字列を表示します。
			 */
			ALMemory.subscriber('translation_sample/text_input').then(function(sub) {
				sub.signal.connect(function(text){
					$('#translation-input').html(text);
				});
			});

			/**
			 * <--SUBSCRIBER-->
			 *
			 * 翻訳結果を表示します。
			 */
			ALMemory.subscriber('translation_sample/text_output').then(function(sub) {
				sub.signal.connect(function(text){
					$('#translation-output').html(text);
				});
			});
		});
	});
});