import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import { toast } from "react-hot-toast";

interface ApiAlertProps {
    title:string;
    description:string;
    variant:"public" | 'admin'
};

const TextMap:Record<ApiAlertProps['variant'],string>={
    public:"Public",
    admin:"Admin"
}

const VariantMap:Record<ApiAlertProps['variant'],BadgeProps["variant"]>={
    public:"secondary",
    admin:"destructive"
}

export const ApiAlert:React.FC<ApiAlertProps>=({
    title,
    description,
    variant="public",
})=>{
    const onCopy=()=>{
        navigator.clipboard.writeText(description);
        toast.success('API Route Copied to the clipboard')
    }
    return (
    <Alert>
        <Server className="h-4 w-4"/>
        <AlertTitle className="flex items-center gap-x-2">
            {title}
            <Badge variant={VariantMap[variant]}>
                {TextMap[variant]}
            </Badge>
        </AlertTitle>
        <AlertDescription className="mt-4 flex items-center justify-between">
            <code className="realtive rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold font-sm">
                {description}
            </code>
            <Button variant='outline' size='icon' onClick={onCopy}>
               <Copy className="h-4 w-4 "/> 
            </Button>
        </AlertDescription>
    </Alert>
    )
}