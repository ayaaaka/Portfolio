import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface HobbyCardProps {
  title: string;
  icon: IconProp;
}

export function HobbyCard({ title, icon }: HobbyCardProps) {
    return (
        <div className="p-4 border rounded-lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <FontAwesomeIcon icon={icon} width={100} />
            <p style={{ textAlign: 'center', marginTop: '10px' }}>{title}</p>
        </div>
    );
}