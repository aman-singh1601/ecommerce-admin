import prismadb from "@/lib/prismadb"


interface DashboradPageProps{
  params:{storeId:string}
};

const DashboardPage:React.FC<DashboradPageProps>= async ({
  params
})=>{
  const store=await prismadb.store.findFirst({
    where:{
      id:params.storeId
    }
  })
  return (
    <div>Active Store : {store?.name}</div>
  )  
}
export default DashboardPage