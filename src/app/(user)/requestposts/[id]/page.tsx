export default function Page({ params }: { params: { id: string } }) {
    return (
        <main className="container">
            <h1> {params.id} request post</h1>
        </main>
    );
}
