"use client";
import { OrganizationSwitcher, } from "@clerk/nextjs";

const OrganizationIdPage = () => {
    async function create(formData:FormData) {
        "use server"
    }
    return (
        <div>
            <form action={create}>
                <input
                    id="title"
                    name = "title"
                    required
                    className="border-black border p-1"
                    placeholder="Enter a board title"
                />
            </form>
        </div>
    );
};

export default OrganizationIdPage;