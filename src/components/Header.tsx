import { Sparkle } from "phosphor-react";
import "../styles/header.css"

interface HeaderProps{
    title: string
}

export function Header(props: HeaderProps) {
    return (
		<div className="timeline-header">
			{props.title}
			<Sparkle size={32} color="#1da1f2" weight="regular" />
		</div>
	);
}