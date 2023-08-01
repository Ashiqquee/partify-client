import Sidebar from "../../components/user/Sidebar";
import SinglePage from "../../components/user/SingleProvider";

const SingleProvider = () => {
    return (
        <>
            <Sidebar />
            <div className="flex md:ml-72 lg:ml-64 ">
                <SinglePage />
            </div>
        </>

    )
}

export default SingleProvider;
