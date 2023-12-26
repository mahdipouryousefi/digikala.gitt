import { RiHome2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";

const Fixphone = () => {

    return (<>
        <div className='fixphone'>
           
            <a> <RiHome2Fill /><span style={{ fontSize: '15px ', marginTop: '5px' }}>خانه</span></a>
            <a> <SlBasket />  <span style={{ fontSize: '15px ', marginTop: '5px' }}> خرید</span></a>
            <a> <CgProfile /> <span style={{ fontSize: '15px ', marginTop: '5px' }}>دیجی کالای من</span></a>
           
           
        </div>


    </>)
}
<script src="https://kit.fontawesome.com/f912931521.js" crossorigin="anonymous"></script>
export default Fixphone