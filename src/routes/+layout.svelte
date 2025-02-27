<script lang="ts">
	import '../milligram.css';

	let { children } = $props();
</script>
	
	<header class="nav">
	
		
	<nav>
		<ul><a href={'#'}>Hello</a></ul>
		<ul>Center</ul>
		<ul>Right</ul>
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
	line-height:1em;
	padding-top:1.5rem;
	padding-left:0.5rem;
	padding-right:0.5rem;
}

nav a {
  float: left;
  display: block;
  text-align: center;
  /*padding: 14px 16px;*/
  text-decoration: none;
  font-weight:600;

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
	margin-top:5rem;
}

footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

</style>
