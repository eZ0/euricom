$( document ).ready(function() {

	$('.team').on('click','.phone', function(){
		var phone = $(this).text();
		sendSMS(urlSMS, phone);
	});

	var apikey = 'CIboeuspXb';
	// var url = 'http://bootcamp-challenge.herokuapp.com/api/users?apiKey='+apikey;
	var urlSMS = 'http://bootcamp-challenge.herokuapp.com/api/send-sms?apiKey='+apikey;
	var url = 'data/data.json'
	getData(url);
});


function getData(url){
	this.url = url;
	$.ajax({
		type: "GET",
		url: url,
		async: false
	}).done(function(data) {
		for (var i = 0; i <= data.length; i++) {
			$("p.data-team-"+i).append('<p><span class="phone">'+data[i].phone+'</span><br/>  '+data[i].firstName+' '+data[i].name+',<br/> '+data[i].title+'</p><br/>');
		}
	});
}

function sendSMS(url, phone){
	this.url = url;
	this.phone = phone;
	var text = 'Yes, I am ready to do my presentation. You can find my solution at: ksenia.be/euricom';
	$.ajax({
		type: "POST",
		url: url,
		data: {'username': 'msdn', 'password': 'bootcamp', 'text': text, 'destination': phone}
	}).done(function(data) {
		console.log('test ' + data);
	});
}