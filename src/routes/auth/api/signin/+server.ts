import { json } from '@sveltejs/kit';





export async function POST({request,locals}) {
    const req = await request.json();


    let status ={isChanged:true,error:{}}

    const { data, error } = await locals.supabase.auth.updateUser({password:req.password});
    if (error) status={isChanged:false,error:error};
    console.log(data);

    //console.log(error);
    return json(status);


  
    

};