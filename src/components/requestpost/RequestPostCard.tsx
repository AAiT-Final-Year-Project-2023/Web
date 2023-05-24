import ProfilePicture from "./ProfilePicture";

export default function RequestPostCard(){
    return (
        <div>
            <div>
                <div>
                    <ProfilePicture props={{
                        username: "JohnDoe"
                    }} />
                </div>
                <p></p>
            </div>
            <div></div>
        </div>
    );
}