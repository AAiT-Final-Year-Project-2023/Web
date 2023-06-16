'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Page() {
    const router = useRouter();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fileRef = useRef<HTMLInputElement>(null);
        const titleRef = useRef<HTMLInputElement>(null);
        const descriptionRef = useRef<HTMLTextAreaElement>(null);
        const labelsRef = useRef<HTMLSelectElement>(null);
        const datatypeRef = useRef<HTMLSelectElement>(null);

        try {
            const token = Cookies.get('datashelf_token');
            const formData = new FormData();

            if (fileRef.current?.files) {
                formData.append('file', fileRef.current.files[0]);
            }
            if (titleRef.current) {
                formData.append('title', titleRef.current.value);
            }
            if (descriptionRef.current) {
                formData.append('description', descriptionRef.current.value);
            }
            if (labelsRef.current) {
                formData.append('labels', labelsRef.current.value);
            }
            if (datatypeRef.current) {
                formData.append('datatype', datatypeRef.current.value);
            }

            const res = await fetch(
                `http://${process.env.backendHost}/api/dataset/upload`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`
                    },
                    body: formData
                },
            );
            console.log(res);
            router.push('/datasets');
        } catch (err) {
            alert(err);
            console.error(err);
        }
    };

    return (
        <main className="">
            <div className="flex justify-center w-full">
                <form className="p-8 borderrounded-lg shadow-lg">
                    <div className="mb-4">
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                        <div className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="form-control w-full max-w-xs">
                            <textarea className="textarea" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Labels (separated with comma)" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Datatype</span>
                        </label>
                        <select className="select select-bordered">
                            <option>Image</option>
                            <option>Video</option>
                            <option>Audio</option>
                            <option>Text</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-outline btn-success">Create</button>
                </form>
            </div>
        </main>
    );
}
