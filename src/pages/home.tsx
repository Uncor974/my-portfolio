import { useState } from "react";
import AvatarClose from "../assets/avatar-fermé.png";
import AvatarOpen from "../assets/avatar-ouvert.png";
import { IoIosArrowDown } from "react-icons/io";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="flex flex-col justify-between items-center min-h-screen px-15">
            <div className="flex flex-col items-center justify-center flex-grow pb-70 pt-70">
                <div className="flex items-center justify-center gap-10 md:gap-40">
                    <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>
                    <img
                        src={isHovered ? AvatarOpen : AvatarClose}
                        alt="Avatar"
                        className="w-40 h-40 md:w-62 md:h-62 rounded-full bg-border"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </div>

            <div className="flex justify-center pb-20">
                <IoIosArrowDown className="text-2xl text-primary animate-bounce" />
            </div>
            <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-5">Hello! I'm Louis. 👋</h1>
                        <p className="text-lg">
                            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. 💫
                        </p>
                    </div>

        </section>
    );
}
