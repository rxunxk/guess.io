import Canvas from "./Canvas";
import PlayerList from "./PlayerList";
import ChatArea from "./ChatArea";

const MainContainer = () => {
  return (
    <div className="flex max-sm:flex-col w-full h-screen pt-16 p-4">
      <PlayerList />
      <Canvas />
      <ChatArea />
    </div>
  );
};

export default MainContainer;
