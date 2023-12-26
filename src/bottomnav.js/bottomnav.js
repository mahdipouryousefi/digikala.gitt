import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBuildingCircleXmark, faCartFlatbed, faCartPlus, faCircleArrowDown, faCircleArrowUp, faCircleDot, faCircleNotch, faCircleXmark, faFire, faGift, faHeadSideCough, faIdCard, faLayerGroup, faLocation, faLocationCrosshairs, faLocationPin, faLocationPinLock, faMap, faMapLocation, faMapLocationDot, faMoneyBill, faMoneyCheck, faPlusCircle, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FiMapPin } from "react-icons/fi";
const Bootomnav = () => {
    return (
        <div className="Bootomnav">
            <div className="bottomnavright">

                <FontAwesomeIcon icon={faLayerGroup} />
                <span style={{ fontSize: '1.2em' }}>دسته بندی کالاها</span>
                <span style={{ margin: '5px' }}>|</span>
                <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#7D7C7C' }} />
                <span>شگفت انگیزها</span>
                <FontAwesomeIcon icon={faBagShopping} style={{ color: '#7D7C7C' }} />
                <span>سوپرمارکت ها</span>
                <FontAwesomeIcon icon={faGift} style={{ color: '#7D7C7C' }} />
                <span>کارت هدیه</span>
                <FontAwesomeIcon icon={faFire} style={{ color: '#7D7C7C' }} />
                <span>پر فروش ترینها</span>
                <FontAwesomeIcon icon={faMoneyCheck} style={{ color: '#7D7C7C' }} />
                <span>تخفیف و پیشنهاد ها</span>|
                <span className='delete'>  سوالی دارید ? </span>
                <span className='delete'> در دیجی کالا بفروشید!</span>
            </div>
            <div className="bottomnavleft">

                <FiMapPin
                    style={{ color: '#7D7C7C', margintop: '3px', margin: '3px' }} />
                    <span>لطفا شهر خود را انتخاب کنید</span>
            </div>
        </div>)
}
export default Bootomnav