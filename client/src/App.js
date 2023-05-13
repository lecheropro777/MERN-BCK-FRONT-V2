import React from "react";
import { HomePage, PostForm, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PostProvideer } from "./context/postContext";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvideer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/New" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/posts/:id" element={<PostForm />} />
          </Routes>
          <Toaster/>
        </PostProvideer>
      </div>
    </div>
  );
}

export default App;
