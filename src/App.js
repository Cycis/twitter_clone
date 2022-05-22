import Feeds from "./components/Feeds/Feeds";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from './components/Widget/Widget'

function App() {
  return (
    <main className="text-white min-h-screen flex w-full max-w-[1500px] mx-auto">
      <Sidebar />
      <Feeds />
      <Widget />
    </main>
  );
}

export default App;

