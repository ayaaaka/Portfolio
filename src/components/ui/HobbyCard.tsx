import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface HobbyCardProps {
  title: string;
  icon: IconProp;
}

export function HobbyCard({ title, icon }: HobbyCardProps) {
    return (
        <div className="p-4 border rounded-xl text-center">
            <FontAwesomeIcon icon={icon} width={100} className="mx-auto"/>
            <p className="text-center mt-2.5">{title}</p>
        </div>
    );
}