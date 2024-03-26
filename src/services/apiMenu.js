import supabase from "./supabase"

export async function getMenu(){
const { data, error } = await supabase
.from('Menu_card')
.select('*')

if(error){
  console.error(error)
  throw new error("Menu couldn't load")
}

return data
}

export async function getSingleRow(id){
  
let { data, error } = await supabase
.from('Menu_card')
.select('id')

if(error){
  console.error(error)
  throw new error("Menu couldn't load")
}

return data
}

export async function updateItemPrice(id,newValue){
  
  

  const { data, error, status, statusText } = await supabase
  .from('Menu_card')
  .update(newValue)
  .eq('id', id)
  .select()

console.log(newValue)
console.log(id)
console.log(data)
console.log(statusText)
return data
}

