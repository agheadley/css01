<script lang="ts">

    import {goto} from '$app/navigation';
 
    import { page } from '$app/stores';
    import { onMount } from 'svelte'
    let { data, form }= $props(); 
    
    let next=$state('/');
          
    let email=$state('');
    let password=$state('');
    
    
    const reset=()=>{
        goto('/auth/reset')
    }

    const signIn=async()=>{
  
      let response = await fetch('/auth/signin', {
            method: 'POST',
            body: JSON.stringify({next:next,email:email,password:password}),
            headers: {'content-type': 'application/json'}
      });
      const res= await response.json();

    };
    
    onMount( async () => {
      let current_url = $page.url.pathname.split('/').filter(Boolean).pop() || '/';
      console.log(current_url);
      next = $page.url.searchParams.get('next') ?? '/';
    });
        
        
    
    
    </script>
        
   
          
                <fieldset>
                  <legend>Sign In</legend>
                  <p>
                  <input name="email" type="email" bind:value={email} placeholder="Enter your email"
                  autocomplete="on"/> <button formaction={`?/link&next=${next}`}>Send Sign In Link</button>

                </p>
                     
                <p>
              <input name="password" type="password" bind:value={password} placeholder="Password"/>
            </p>
              <button onclick={signIn}>Sign In</button>
             
              <button formaction="?/reset">Reset Password</button>
             
                </fieldset>    
          
        
              
              
          
      
           
        <style>
           
     
        
            
        
        </style>