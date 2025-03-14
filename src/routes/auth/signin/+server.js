import { json } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';




export async function POST({request,locals}) {
    const req = await request.json();
    const email = String(req.email)
    const password = String(req.password)

    let status ={isChanged:true,error:{}}

   
    const { error } = await locals.supabase.auth.signInWithPassword({email, password})
    if (error) {
      console.error(error)
      redirect(303, '/auth/error')
    } else {
      redirect(303, `${req.next!==null ? req.next : '/'}`)
      //redirect(303, '/')
    }

    return json(error);


  
    

};