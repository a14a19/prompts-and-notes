import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">Prompts</span>
            </h1>
            <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate sint in numquam neque obcaecati cum aliquid perferendis illum sequi, quis atque sit explicabo unde harum facilis placeat ad? Magni.</p>

            <Feed />
        </section>
    )
}

export default Home;