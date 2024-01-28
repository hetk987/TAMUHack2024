import './pages.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className='home-background'>
            <div className="Wrapper">
                <p className="MainText">Plan.</p>
                <p className="MainText">Schedule.</p>
                <p className="MainText">Go.</p>
                <div className='buttonWrapper'>
                    <button class="button-64" href='/trips' >
                        <a href='/trips' class="button-64"> 
                            <span class="text">Find Your Calling</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
