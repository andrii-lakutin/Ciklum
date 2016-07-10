"use strict";

function Header() {
	this.main_list         = document.querySelector('.main-list');
	this.store_button      = document.querySelector('.store');
	this.products_button   = document.querySelector('.products');
	this.support_button    = document.querySelector('.support');
	this.search_field      = document.querySelector('.search > input');
	this.search_button     = document.querySelector('.search > img');
	this.store_dropdown    = document.querySelector('.store_ul');
	this.products_dropdown = document.querySelector('.products_ul');
	this.menu_adaptive     = document.querySelector('.menu-adaptive');
};

var microsoft_header = new Header();

Header.prototype.add_height = function (item , index){
	item.classList.toggle('h50');
};
Header.prototype.display_block = function (item , index){
	setTimeout(function(){ item.classList.toggle('db'); }, 100);
};

Header.prototype.find_a_tags_inside = function(menu_item){
	var a_tag = [];
	for (var i = 0; i < menu_item.children.length; i++) {
		a_tag.push(menu_item.children[i].children[0]);
	};
	return a_tag;
};

Header.prototype.find_img_tags_inside = function (a_tag){
	var img_tag = [];
	for (var i = 0; i < a_tag.length; i++) {
		if (a_tag[i].children[0] !== undefined) {
			img_tag.push(a_tag[i].children[0]);
		}
	};
	return img_tag;
};

Header.prototype.light_up_selected_button = function (menu_item){
	if (menu_item == this.store_dropdown) {
		this.store_button.classList.toggle('bg-gray');
	} else if (menu_item == this.products_dropdown) {
		this.products_button.classList.toggle('bg-gray');
	}
};

Header.prototype.slide_down = function(menu_item) {
	this.light_up_selected_button(menu_item);
	[].forEach.call(menu_item.children, this.add_height); //т.к метод children возвращает HTMLCollection(у которого нет методов массива) 
													      //возьмем методы у массива через call.
	var a_tag = this.find_a_tags_inside(menu_item);
		a_tag.forEach(this.display_block);
	var img_tag = this.find_img_tags_inside(a_tag);
		img_tag.forEach(this.display_block);
};

Header.prototype.menu_adaptive_slide_down = function (){
	this.main_list.classList.toggle('h50');
	this.store_button.classList.toggle('db');
	this.products_button.classList.toggle('db');
	this.support_button.classList.toggle('db');
};

Header.prototype.show_up_adaptive_search = function (){
	this.search_field.classList.toggle('db');
};

Header.prototype.wait_for_clicks = function (){
	var self = this;
	this.store_button.addEventListener('click', function(){
		self.slide_down(self.store_dropdown);
	});
	this.products_button.addEventListener('click', function(){
		self.slide_down(self.products_dropdown);
	});
	this.menu_adaptive.addEventListener('click', function(){
		self.menu_adaptive_slide_down();
	});
	this.search_button.addEventListener('click',function(){
		self.show_up_adaptive_search();
	});
};

microsoft_header.wait_for_clicks();



