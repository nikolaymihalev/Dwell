import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface HintProps {
    children: React.ReactNode;
    desription: string;
    side?: "left"|"right"|"top"|"bottom";
    sideOffset?: number;
};

export const Hint = ({
    children,
    desription,
    side = "bottom",
    sideOffset = 0
}:HintProps)=>{
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent sideOffset={sideOffset} side = {side} className="text-xs max-w-[220px] break-words">
                    {desription}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};