import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-zinc-900 dark:text-zinc-200 my-10 text-4xl">Home Page</h1>
        <p className="text-center text-xl my-6 text-zinc-900 max-w-[700px] dark:text-zinc-200 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorprat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
        <div className="flex justify-center gap-x-4 my-10">
          <Link className="px-6 py-2 text-lg rounded-md bg-zinc-950 text-white dark:bg-gray-300 dark:text-zinc-900 
          hover:scale-95 transition-transform" to="/todos">
            Todos
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
