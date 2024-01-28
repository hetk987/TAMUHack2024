import './pages.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className='home-background'>
            <div className="Wrapper">
                <h1 className="MainText" data-text="Plan."></h1>
                <h1 className="MainText" data-text="Schedule."></h1>
                <h1 className="MainText" data-text="Go."></h1>
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
