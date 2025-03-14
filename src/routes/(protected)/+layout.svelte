<script lang="ts">
	//import '../milligram.css';
	import '../../app.css';

	import * as icon from '$lib/icon';


	let { children } = $props();
</script>
	
	<header>
	
		
	<nav>
		
		<div class="brand">
			Brand
		</div>
		<div>
			<a href={'/'}>Dashboard</a>
			<a href={'/'}>History</a>
			<a href={'/'}>Admin</a>
		</div>
		<div>
		<a href={'/account'}>{@html icon.user()}</a>
		</div>
		
		
	</nav>

	
	

	</header>

	

		<main>
			{@render children()}
		</main>



	<footer>
		<p>
			Anthony Headley CSS <a href={'#'}>Hello</a>
		</p>
	</footer>

<style>










</style>
