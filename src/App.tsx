import Navbar from './components/Navbar';
import HomeRoute from './routes/HomeRoute';
import ExperienceRoute from './routes/ExperienceRoute';
import ProjectsRoute from './routes/ProjectsRoute';
import SkillsRoute from './routes/SkillsRoute';
import Footer from './components/Footer';
// import {Dock} from './components/magicui/dock';

function App() {
    return (
        <>
            {/* <Dock children={undefined}></Dock> */}
            <Navbar />
            <div>
                <HomeRoute />
                <ProjectsRoute />
                <SkillsRoute />
                <ExperienceRoute />
            </div>
            <Footer/>
        </>
    );
}

export default App;
