interface BoardProps {
    title: string;
    id: string;
}
const Board = ({
    title,
    id
}: BoardProps) => {
    return (
        <div>
            Board title: {title}
        </div>
    )
}