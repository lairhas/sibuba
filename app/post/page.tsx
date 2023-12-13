import { client } from "@/app/lib/sanity";
import Link from "next/link";

async function getData() {
    const query = `*[_type == "post"]`;
    const data = await client.fetch(query)
    return data
}

export const revalidate = 60
export default async function Post() {
    const data = await getData();
    if (!data) {
        return (
            <div className="flex flex-col px-6 py-16 xl:px-12 xl:py-20 text-[#212427] gap-y-3 min-h-screen">
                <div className="flex flex-col gap-2 mx-auto py-4">
                    <span className="text-center text-3xl xl:text-5xl font-bold">Page that you are looking for is not found</span>
                    <span className="text-center font-medium text-[#7b1fa1]">Back to Home</span>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col px-6 py-16 xl:px-12 xl:py-20 text-[#212427] gap-y-5 min-h-screen">
                <span className="text-center text-3xl font-bold border-b p-4">All post</span>
                {data.map((item: any) => (
                    <Link href={`/post/${item.slug.current}`} className="flex flex-col gap-1 p-4 group max-w-[720px] mx-auto" prefetch>
                        <span className="text-center text-xl font-bold group-hover:underline">{item.title}</span>
                        <span className="text-center text-xs font-light">{new Date(item._createdAt).toISOString().split("T")[0]}</span>
                    </Link>
                ))}
            </div>
        </>
    )

}