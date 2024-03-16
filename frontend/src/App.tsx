import { Footer, Header } from "./components";
import {
  BlogSection,
  Category,
  Comments,
  Content,
  Counts,
  Section,
  VisionAndMission,
} from "./components/sections";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col gap-8">
        <Section />
        <Category />
        <VisionAndMission />
        <Comments />
        <Counts />
        <Content />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
