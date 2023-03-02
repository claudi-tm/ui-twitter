interface TweetProps {
    user: string
    children: string
}

export function Tweet(props: TweetProps) {
    return (
        <div id="didi">{ props.children} from {props.user} </div>
    )
}
