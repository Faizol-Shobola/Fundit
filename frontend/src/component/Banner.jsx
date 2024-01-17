import jsonData from '../Api/data.json';

const Banner = () => {

    const { donation } = jsonData;
    return (

        <div className="sm:max-w-auto lg:max-w-2xl text-left py-10 px-4">
            <h2 className="text-3xl font-bold sm:text-6xl">
                {donation.title}
            </h2>

            <p className="mt-5 text-gray-600">
                {donation.content}
            </p>
        </div>

    );
}

export default Banner;