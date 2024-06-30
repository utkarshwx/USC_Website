import { MdOutlineAddAPhoto } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TiSocialDribbble } from "react-icons/ti";
import { FaRegFileVideo } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { GiArtificialHive } from "react-icons/gi";
import { GrVirtualMachine } from "react-icons/gr";
export const NonTechHiringData = [
    {
        key: 1,
        name: 'Photography',
        icon: <MdOutlineAddAPhoto />
    },
    {
        icon: <TfiWrite />,
        key: 2,
        name: 'Content Writing',
    },
    {
        key: 3,
        name: 'Social Media Marketing',
        icon: <TiSocialDribbble />,

    },
    {
        key: 4,
        name: 'Video Editing',
        icon: <FaRegFileVideo />

    },
    {
        key: 5,
        name: 'Graphics Design',
        icon: <MdDesignServices />
    },

]

export const TechHiringData = [
    {
        key: 1,
        name: 'Cloud Automation',
        icon: <TbCloudComputing />
    },
    {
        icon: <GrVirtualMachine />,
        key: 2,
        name: 'Core ML',
    },
    {
        key: 3,
        name: 'RPA & AI',
        icon: <GiArtificialHive />,

    },
    {
        key: 4,
        name: 'UI/UX Design',
        icon: <SiMaterialdesign />

    },
  

]
