import { Footer, Header } from "./components";
import { Category, Content, Section } from "./components/sections";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className=" my-10">
        <Section />
        <Category />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
