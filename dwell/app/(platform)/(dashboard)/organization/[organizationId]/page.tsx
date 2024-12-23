import { BoardList } from "./_components/board-list";
import { Info } from "./_components/info";

const OrganizationIdPage = async () => {    

    return (
        <div className="w-full mb-20">
            <Info/>     
            <div className="px-2 md:px-4">
                <BoardList/>
            </div>       
        </div>
    );
};

export default OrganizationIdPage;