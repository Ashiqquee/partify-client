
import { faBagShopping, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailBox = ({ details }) => {

    return(
        <>
            <div className="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200">
                <div className="flex items-center -mx-2">
                    <FontAwesomeIcon icon={faUser} className=' h-8 text-black' />


                    <div className="mx-2">
                        <h3 className="text-2xl font-medium text-gray-800 ml-2">{details?.totalUsers}</h3>
                        <p className="mt-1 text-sm text-gray-500 ml-2">Users</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200">
                <div className="flex items-center -mx-2">
                    <FontAwesomeIcon icon={faUserSecret} className=' h-8 text-black' />

                    <div className="mx-2">
                        <h3 className="text-2xl font-medium text-gray-800 ml-2">{details.totalProviders}</h3>
                        <p className="mt-1 text-sm text-gray-500 ml-2">Providers</p>
                    </div>
                </div>
            </div>


            <div className="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200">
                <div className="flex items-center -mx-2">
                 <FontAwesomeIcon icon={faBagShopping}  className=' h-8 text-black'/>

                    <div className="mx-2">
                        <h3 className="text-2xl font-medium text-gray-800">
                         <span className="text-xl text-gray-600 ml-2">{details.totalOrders}</span>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 ml-2">Orders</p>
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default DetailBox;