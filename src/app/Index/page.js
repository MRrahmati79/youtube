import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Topics from "../components/Topics";
import Main from "../components/Main";
export default function Index() {
  return (
    <div className="flex m-4">
      <div className="w-1/5 ">
        <Sidebar />
      </div>
      <div className="flex flex-col w-4/5 ">
        <Header />
        <Topics />
        <Main />
      </div>
    </div>
  );
}
