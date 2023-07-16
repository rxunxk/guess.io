import React from 'react'
import Canvas from "./Canvas";
import PlayerList from './PlayerList';
import ChatArea from './ChatArea';

const MainContainer = () => {
  return (
    <div className="flex w-full h-screen pt-16 p-4">
        <PlayerList/>
        <Canvas/>
        <ChatArea/>
    </div>
  )
}

export default MainContainer