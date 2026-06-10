export function TableCaption({ title }: { title?: string }) {
    return (
        <caption className="caption-top font-medium text-lg">
            {title ? title : "List of Tasks"}
        </caption>
    );
}
