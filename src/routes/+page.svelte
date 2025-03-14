<script lang="ts">
	import * as icon from '$lib/icon';

	let isPasswordShow=false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<p>
	<button>Button</button>
	<button class="outline">Button</button>


<section>
	<form>
	<fieldset>
		<legend>Legend</legend>
	  <label for="nameField">Name</label>
		
		<input type="text" placeholder="CJ Patoilo" id="nameField">
			
		
	 
	 
		<label for="passwordField">Password</label>
		<input type={isPasswordShow ? 'text' : 'password'}  placeholder="password" id="passwordField">
		<div class="float-right">
			<input type="checkbox" bind:checked={isPasswordShow} id="confirmField">
		<label class="label-inline" for="confirmField">Show password</label>
	  	</div>
		
	 
	  <label for="ageRangeField">Age Range</label>
	  <select id="ageRangeField">
		<option value="0-13">0-13</option>
		<option value="14-17">14-17</option>
		<option value="18-23">18-23</option>
		<option value="24+">24+</option>
	  </select>
	  <label for="commentField">Comment</label>
	  <textarea placeholder="Hi CJ …" id="commentField"></textarea>
	  <div class="float-right">
		<input type="checkbox" id="confirmField">
		<label class="label-inline" for="confirmField">Send a copy to yourself</label>
	  </div>
	  <input class="button-primary" type="submit" value="Send">
	</fieldset>
  </form>
  
</section>



<section>
	<table>
	<thead>
	  <tr>
		<th>Name</th>
		<th>Age</th>
		<th>Height</th>
		<th>Location</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
		<td>Stephen Curry</td>
		<td>27</td>
		<td>1,91</td>
		<td>Akron, OH</td>
	  </tr>
	  <tr>
		<td>Klay Thompson</td>
		<td>25</td>
		<td>2,01</td>
		<td>Los Angeles, CA</td>
	  </tr>
	</tbody>
  </table>
  
</section>

<section>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


</section>


<p> <label class="file-upload" for="file-upload">
Choose File
</label>
<input id="file-upload" type="file"/>
</p>
<style>




</style>
