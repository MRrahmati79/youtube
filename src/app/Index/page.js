import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Topics from "../components/Topics";
import Main from "../components/Main";
export default function Index() {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <Header />
        <Topics />
        <Main />
      </div>
    </div>
  );
}
