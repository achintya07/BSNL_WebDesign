<template>
<header>
			<div class="wrap">
				<div id="hamburger" v-on:click="display_menu()">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<img src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/104/thumb_bigger_formation-vue-js.png" alt="logo">
				<nav id="menu">
					<li><a>Menu 1</a></li>
					<li class="drop"><a v-on:click="display_drop_menu()">Menu 2 dropdown <i class="icon-arrow"></i></a>
						<ul class="drop_menu">
							<a>Sub menu 1</a>
							<a>Sub menu 2</a>
							<a>Sub menu 3</a>
						</ul>
					</li>
					<li class="drop"><a v-on:click="display_drop_menu()">Menu 3 dropdown  <i class="icon-arrow"></i></a>
						<ul class="drop_menu">
							<a>Sub menu 1</a>
							<a>Sub menu 2</a>
							<a>Sub menu 3</a>
						</ul>
					</li>
					<li><a>Menu 4</a></li>
				</nav>
			</div>
		</header>
    </template>