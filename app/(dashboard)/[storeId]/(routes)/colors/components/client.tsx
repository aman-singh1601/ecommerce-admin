'use client'

import { Plus } from "lucide-react"
import { Heading } from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useParams, useRouter } from "next/navigation"
import { ColorColumn, columns } from "./column"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/apii-list"


interface ColorClientProps{
    data:ColorColumn[]
}
export const ColorClient:React.FC<ColorClientProps> =({
   data
})=>{
    const router=useRouter();
    const params=useParams();

    return (
        <>
        <div className="flex items-center justify-between">
            <Heading
             title={`Colors (${data.length})`}
             description="Manage colors for your store"
            />
            <Button onClick={()=>router.push(`/${params.storeId}/colors/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add New
            </Button>
        </div>
        <Separator/>
        <DataTable 
         searchKey="name"
         columns={columns}
         data={data}
        />
        <Heading title="API" description="API calss for colors"/>
        <Separator/>
        <ApiList entityName="colors" entityIdName="colorId"/>
        </>
    )
}