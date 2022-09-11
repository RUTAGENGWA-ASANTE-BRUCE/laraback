export const getStoreUrl=async(storeId)=>{
    const res=await fetch(`api/admin/stores/${storeId}`,{method:"GET"})
    const data=await res.json();
    if(!data){
        return {msg:"Store not found"}
    }
    else{
        const storeLink=`/coupons/${data.slug}`
        return storeLink
    }
}