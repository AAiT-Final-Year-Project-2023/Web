'use client';
import { showInfoAlert } from '@/common/functions';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Page() {
    const fileRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const labelsRef = useRef<HTMLInputElement>(null);
    const datatypeRef = useRef<HTMLSelectElement>(null);
    const formRef = useRef(null);

    const router = useRouter();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
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
                        Authorization: `${token}`,
                    },
                    body: formData,
                },
            );
            const data = await res.json();
            if (data.statusCode === 400) {
                return alert(data.message);
            }
            showInfoAlert('Dataset created, pending approval', document);
            router.push('/datasets');
        } catch (err) {
            alert(err);
            console.error(err);
        }
    };

    return (
        <main className="">
            <div className="flex w-full justify-center">
                <form
                    ref={formRef}
                    className="borderrounded-lg p-8 shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="label">
                            <span className="label-text">Select zip file</span>
                        </label>
                        <input
                            type="file"
                            className="file-input-bordered file-input-primary file-input w-full max-w-xs"
                            ref={fileRef}
                            accept=".zip"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder=""
                                className="input-bordered input-primary input w-full max-w-xs"
                                ref={titleRef}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <div className="form-control w-full max-w-xs">
                            <textarea
                                className="textarea-primary textarea"
                                placeholder=""
                                ref={descriptionRef}
                            ></textarea>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="label">
                            <span className="label-text">
                                Labels (separated with comma)
                            </span>
                        </label>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder=""
                                className="input-bordered input-primary input w-full max-w-xs"
                                ref={labelsRef}
                            />
                        </div>
                    </div>
                    <div className="form-control mb-4 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Datatype</span>
                        </label>
                        <select
                            className="select-bordered select-primary select"
                            ref={datatypeRef}
                        >
                            <option value={'image'}>Image</option>
                            <option value={'video'}>Video</option>
                            <option value={'audio'}>Audio</option>
                            <option value={'text'}>Text</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn-success btn-outline btn"
                    >
                        Create
                    </button>
                </form>
            </div>
        </main>
    );
}
