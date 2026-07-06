export default function FormContainer({
    title,
    children,
    onSubmit
}) {
    return (
        <div className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-lg p-8">

            <h1 className="text-3xl font-bold mb-6">
                {title}
            </h1>

            <form
                onSubmit={onSubmit}
                className="space-y-5"
            >
                {children}
            </form>

        </div>
    );
}