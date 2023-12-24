import { db } from "@/lib/db";

export async function create(formData:FormData) { 
    const title = formData.get("title");

    await db.board.create({
        data: {
            title,
        }
    });
}