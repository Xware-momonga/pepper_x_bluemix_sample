$(document).ready(function() {
	QiSession(function(session) {
		session.service('ALMemory').then(function(ALMemory) {

			/*サーバーから分類のデータを受け取ったら結果の表を出力*/
			ALMemory.subscriber('visual_recognition/classify/class').then(function(sub) {
				sub.signal.connect(function(classes){
					var diff = classes.length - 10;
					var adjust = classes;

					/*確度の大きい順に並べ替え*/
					adjust.sort(function(a,b){
					    if( a[1] > b[1] ) return -1;
					    if( a[1] < b[1] ) return 1;
						return 0;
					});

					/*分類が11個以上の場合は上位10個以外を削除*/
					if(diff > 0) {
						for(var i = 0; i < diff; i++) {
							adjust.pop();
						}
					}

					/*表の出力htmlを作成*/
					var classes_text = '';
					var score_text = '';
					for(var i = 0; i < adjust.length; i++) {
						classes_text = classes_text + "<div>" + adjust[i][0] + "</div>";
						score_text = score_text + "<div>" + adjust[i][1].toFixed(3) + "</div>";
					}
					/*表のhtmlの出力*/
					$('#result_class').html(classes_text);
					$('#result_score').html(score_text);
				});
			});

			/*写真を撮った場合、その撮った写真を出力*/
			ALMemory.subscriber('visual_recognition/classify/take_picture').then(function(sub) {
				sub.signal.connect(function(picture){
					var dt = new Date();	/*1970/01/01からの秒数*/
					var picture_text = "<img src='image.jpg?" + dt.getTime() + "'>";	/*キャッシュを使わずに画像の出力を行う*/
					$('#display_image').html(picture_text);
				});
			});

		});
	});
});