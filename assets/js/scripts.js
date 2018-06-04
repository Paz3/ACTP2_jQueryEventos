$(function() {

$('.cards').on('click', '.card', function(){
	$(this).toggleClass('card--open');
})

$('.cards').on('click', '.card__like', function(event){
	event.stopPropagation();
	event.preventDefault();
	$(this).toggleClass('card__like--red');
})

$('.cards').on('click','.card__follow-btn', function(event){
	event.stopPropagation();
	event.preventDefault();
	$(this).toggleClass('card__follow-btn--following');
})

});


$('#image').on('change', function(event){
	var ruta = 'assets/images/squared/';
	var valor = $(event.target).val();
	$('.create__image img').attr('src', ruta + valor);
	nuevaImg = $('.create__image img').attr('src');
	selectorImg = $('#image').children(':selected').text();
	
});

$('#author').on('change', function(event){
	// var ruta = 'assets/images/profiles/';
	var valor = $(event.target).val();
	$('.create__profile img').attr('src', `assets/images/profiles/${ valor }`);
	nuevaAuthor = $('.create__profile img').attr('src');
	selectorAuthor = $('#author').children(':selected').text();
	
});

$('.create__submit').on('click', function(event){
	event.preventDefault();

	selectorNombre = $('#name').val();
	selectorSeguidores = $('#followers').val();
	selectorMegusta = $('#likes').val();
	selectorSiguiendo = $('#following').val();
	nuevaImg = $('#image').val();
	selectorAuthor = $('#author').val();
	nameAuthor = $('#author').children(':selected').text();

	// $('.cards').append('<li class="card">'+'<div class="card__highlight">'+'<img class="card__img" src="'+nuevaImg+'" alt="">'+'</div>'+
	// 	'<div class="card__content">'+'<div class="card__profile-container">'+'<img class="card__profile" src="'+nuevaAuthor+'" alt="">'+'</div>'+
	// 	'<div class="card__title">'+'<h2>'+nombre+'<h2>'+'</div>'+'<div class="card__author">'+'<h3 class="card__author-name">'+selectorNombre+'</h3>'+'</div>'+
	// 	'<a class="card__like" href="#">'+'<i class="fas fa-heart"></i>'+'</a>'+'<div class="card__hidden">'+'<ul class="social">'+'<li class="social__element">'+
	// 	selectorSeguidores+'</div>'+'<div class="social__text">Followers</div>'+'</li>'+'<li class="social__element">'+selectorMegusta+'<div class="social__text">Likes</div>'+'</li>'+
	// 	'<li class="social__element">'+selectorSiguiendo+'<div class="social__text">Following</div>'+'</li>'+'</ul>'+'<div class="card__follow">'+
 //            '<button class="card__follow-btn">Seguir</button>'+'</div>'+'</div>'+'</div>'+'</li>');

	var content = `<li class="card">
      <div class="card__highlight">
        <img class="card__img" src="./assets/images/squared/${nuevaImg}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="./assets/images/profiles/${selectorAuthor}" alt="">
        </div>
        <a class="card__like card__like--red" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__title">
          <h2>${selectorNombre}</h2>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">${nameAuthor}</h3>
        </div>
        <div class="card__hidden">
          <ul class="social">
            <li class="social__element">
              <div class="social__number">${selectorSeguidores}</div>
              <div class="social__text">Followers</div>
            </li>
            <li class="social__element">
              <div class="social__number">${selectorMegusta}</div>
              <div class="social__text">Likes</div>
            </li>
            <li class="social__element">
              <div class="social__number">${selectorSiguiendo}</div>
              <div class="social__text">Following</div>
            </li>
          </ul>
          <div class="card__follow">
            <button class="card__follow-btn">Seguir</button>
          </div>
        </div>
      </div>
    </li>`;
    $('.cards').append(content);
    console.log(selectorNombre,selectorSeguidores,selectorMegusta,selectorSiguiendo)
});







// $('.cards').on('click', function(event){
// 	event.stopPropagation();
// 	event.preventDefault();
// 	$('.card__like').toggleClass('card__like--red');
// })

// $('.cards').on('click', function(event){
// 	event.stopPropagation();
// 	event.preventDefault();
// 	$('.card__follow-btn').toggleClass('card__follow-btn--following');
// })





