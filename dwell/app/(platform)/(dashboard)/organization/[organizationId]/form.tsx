"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

export const Form=()=>{
    return (
        <form action = {create}>
                <input
                    id="title"
                    name = "title"
                    required
                    className="border-black border p-1"
                    placeholder="Enter a board title"
                />
            <Button type = "submit">
                Submit
            </Button>
        </form>
    )
}