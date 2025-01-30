import { BookList } from '@/components/sections/book-list';
import { BookOverview } from '@/components/sections/book-overview';

const Home = () => {
    return (
        <>
            <BookOverview />
            <BookList />
        </>
    );
};

export default Home;
