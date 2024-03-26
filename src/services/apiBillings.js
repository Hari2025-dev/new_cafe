import supabase from "./supabase"


export async function getBilling(){
  const { data, error } = await supabase
  .from('billing')
  .select('*')
  
  if(error){
    console.error(error)
    throw new error("Menu couldn't load")
  }
  
  return data
  }

export async function insertData(billingData){
  
  const { error } = await supabase
  .from('billing')
  .insert(billingData)
  console.log(error)
  
  }

