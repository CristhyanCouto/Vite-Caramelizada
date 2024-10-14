
interface YoutubeVideosProps {
    width: string;
    height: string;
    src: string;
    title: string;
}

export default function YoutubeVideos(props: YoutubeVideosProps) {
  return (
    <div>
        <iframe 
        width={props.width} 
        height={props.height}
        src={props.src}
        title={props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
    </div>
  )
}
