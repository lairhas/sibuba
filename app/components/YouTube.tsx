import { YouTubeEmbed } from '@next/third-parties/google'

export default function YoutubePlayer({ videoId }: { videoId: string }) {
    console.log(videoId)
    return <YouTubeEmbed videoid={videoId} params="controls=1" />
}