import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import Button from '@/components/shared/Button/Button';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="lg:text-7xl xl:text-8xl text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">Sorry, the page you are looking for does not exist.</p>
            <Link to="/">
                <Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go back to Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;