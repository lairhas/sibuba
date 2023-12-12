
import { client } from "@/app/lib/sanity"
import YoutubePlayer from "@/app/components/YouTube";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"]`
    const data = await client.fetch(query)

    return data[0]
}

export const revalidate = 60;
export default async function SlugPage({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

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
            <div className="flex flex-col px-6 py-16 xl:px-12 xl:py-20 text-[#212427] gap-y-3">
                <div className="flex flex-col gap-2 mx-auto py-4">
                    <span className="text-center font-medium text-[#7b1fa1]">{new Date(data._createdAt).toISOString().split("T")[0]}</span>
                    <span className="text-center text-3xl xl:text-5xl font-bold">{data.title}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <PortableText value={data.body} components={{}} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Check out my vlog:</span>
                    <YoutubePlayer videoId={data.youtube} />
                </div>
            </div>
        </>
    )
}
