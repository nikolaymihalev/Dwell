"use-client";

import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu, Sheet} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const MobileSidebar = ()=>{
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    const onOpen = useMobileSidebar((state)=> state.onOpen);
    const onClose = useMobileSidebar((state)=> state.onClose);
    const isOpen = useMobileSidebar((state)=> state.isOpen);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    useEffect(()=>{
        onClose();
    }, [pathname, onClose]);

    if(!isMounted){
        return null;
    }
    
    return (
        <>
            <Button onClick={onOpen} className="block md:hidden" variant="ghost" size="sm">
                <Menu className="h-4 w-4"/>
            </Button>
        </>
    );
};