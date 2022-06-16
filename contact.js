(function (window, document) {

})(window, document);



function send(){
	e.preventDefault();
	Email.send
	({ Host : "smtp.gmail.com", 
	Username : "haidershahpak17@gmail.com", 
	Password : "Godzilla12345Atom", 
	To : 'haidershahpak17@gmail.com', From : document.getElementById("email").value, 
	Subject : "This is the subject",
	 Body : document.getElementById("message").value,}).then( message =>alert(message) );
	}
	
