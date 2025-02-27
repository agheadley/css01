<script lang="ts">
	import '../milligram.css';
	import * as icon from '$lib/icon';


	let { children } = $props();
</script>
	
	<header class="nav">
	
		
	<nav>
		<div class="brand">
			Brand
		</div>
		<div>
			<a href={'#'}>Dashboard</a>
			<a href={'#'}>History</a>
			<a href={'#'}>Admin</a>
		</div>
		<div>
		<a href={'#'}>{@html icon.user()}</a>
		</div>
		
		
	</nav>

	
	

	</header>

	
	<div class="container">
		<main class="content">
			{@render children()}
		</main>
	</div>


	<footer>
		<p>
			Anthony Headley CSS
		</p>
	</footer>

<style>


nav {
	display: flex;
	justify-content: space-between;
	
	
	padding-left:0.5rem;
	padding-right:0.5rem;
	height: 5rem;
	line-height: 5rem;
	text-align: center;
}
 nav a{
	padding:0.2rem;
	text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: .1rem;

 
 }

 nav .brand {
	
	font-size:2rem;
	font-weight:700;

	
 }




.nav {
	position:fixed;
	top:0;
	width:100%;
	height:5rem;
	background-color: #fff;
	border-bottom:1px solid #606c76;
	z-index:1000;
}

.content {
	margin-top:7rem;
}

footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

</style>
