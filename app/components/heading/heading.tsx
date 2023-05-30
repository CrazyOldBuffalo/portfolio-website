import ProfileImage from "./profileimg/profileimg";

export default function Heading() {
    return (
        <div className="flex flex-row w-full bg-[#34324a] rounded-sm p-2 drop-shadow-lg">
            <div className="self-start">
                <ProfileImage/>
            </div>
        </div>
    )
}