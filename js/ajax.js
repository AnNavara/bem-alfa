(function() {

	if (!("FormData" in window)) {
		return;
	}

	var form = document.querySelectorAll(".popup__container--form");

  for (i = 0; i < form.length; ++i) {
		form[i].addEventListener("submit", function(event) {
			event.preventDefault();

			var data = new FormData(form[i]);

			request(data, function(response) {
				console.log(response);
			});
		});
	}

	function request(data, fn) {
		var xhr = new XMLHttpRequest();

		xhr.open("post", "/send?" + (new Date()).getTime());

		xhr.addEventListener("readystatechange", function() {
			if (xhr.readyState == 4) {
				fn(xhr.resposeText);
				}
		});

		xhr.send(data);
		console.log(data);
	}
})();
