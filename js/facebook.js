function facebook() {
	FB.init({
	    appId: '',//api aplicación facebook
	    secret: '',// secret aplicación facebook
	    cookie: true,
	    status  : true, 
	    xfbml: true,
	    oauth: true
	});
	FB.login(function(response) {
	  if (response.authResponse) {
	    FB.api('/me', function(response) {
	      publicar(response.name);
	    });
	  }
	}, {scope: 'email,publish_stream'});

	function publicar(nombre){
	    FB.api('/me/feed', 'post', {
	      picture : "http://imagen.png",
	      link : "http://www.demo.cl",
	      name : "Prueba demo",
	      description : ''+nombre+' usuario',
	    });
	}
}