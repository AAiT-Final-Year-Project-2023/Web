import Image from 'next/image';

export default function ProfilePicture({
    props,
}: {
    props: { username: string; imageSrc?: string };
}) {
    const { username, imageSrc } = props;
    const alt = `${username}'s profile image`;
    return (
        <div>
            {imageSrc ? (
                <Image src={imageSrc} alt={alt} />
            ) : (
                <span className="he">
                    <p>{username[0]}</p>
                </span>
            )}
        </div>
    );
}
