import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://nice-hill-08b684b03.2.azurestaticapps.net/blogs/')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;