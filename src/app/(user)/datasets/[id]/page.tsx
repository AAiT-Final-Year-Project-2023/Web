export default function Page({ params }: { params: { id: string } }) {
    return (
        <main className="">
            <h1> {params.id} dataset</h1>
        </main>
    );
}
