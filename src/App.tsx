import Navbar from './components/Navbar';
import HomeRoute from './routes/HomeRoute';
import ExperienceRoute from './routes/ExperienceRoute';
import ProjectsRoute from './routes/ProjectsRoute';
import SkillsRoute from './routes/SkillsRoute';
import Footer from './components/Footer';

function App() {
    return (
        <>
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
