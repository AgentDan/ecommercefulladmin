import photo0 from './0.jpg'
import photo1 from './1.jpg'
import photo2 from './2.jpg'
import photo3 from './3.jpg'
import photo4 from './4.jpg'
import {Link} from "react-router-dom";

const Renders = () => {
    return (
        <>
            <Link to={'/'}>
                <div className="right-1 fixed flex backdrop-blur-sm bg-white/30 w-44 h-12 rounded-3xl p-3 mt-1">
                    HOME
                </div>
            </Link>
            <img src={photo0} alt="ppp"/>
            <img src={photo1} alt="ppp"/>
            <img src={photo2} alt="ppp"/>
            <img src={photo3} alt="ppp"/>
            <img src={photo4} alt="ppp"/>

        </>
    );
};

export default Renders;
