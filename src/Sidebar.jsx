import React from "react";
import logoText from "./assets/Instagram-Logo-2010-2013.png";

function Sidebar() {
  return (
    <div className="m-3">
      <div className="d-flex flex-column gap-3">
        <img className="logo-text" src={logoText} />
        <div>
          <i class="bi bi-house-door-fill"></i>Home
        </div>
        <div>
          <i class="bi bi-search"></i>Search
        </div>
        <div>
          <i class="bi bi-compass"></i>Explore
        </div>
        <div>
          <i class="bi bi-play"></i>Reels
        </div>
        <div>
          <i class="bi bi-chat-dots"></i>Message
        </div>
        <div>
          <i class="bi bi-heart"></i>Notification
        </div>
        <div>
          <i class="bi bi-plus-square"></i>Create
        </div>
        <div>
          <i class="bi bi-person-circle"></i>Profile
        </div>
      </div>
      <div className=" position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
        <div>
          <i class="bi bi-threads"></i>Threads
        </div>
        <div>
          <i class="bi bi-list"></i>More
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
