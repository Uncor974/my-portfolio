import { MagnetizeButton } from "@/components/ui/magnetize-button"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    };
    return (
        <div className="overflow-hidden">
            <MagnetizeButton particleCount={300}attractRadius={100} onClick={handleClick} />
        </div>
    )
}
