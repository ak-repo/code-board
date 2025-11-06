import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                <span className="text-white font-bold text-lg tracking-tighter">
                  CB
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
            <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              CodeBoard
            </h1>
          </div>

          {/* Center Navigation */}

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative group">
              <div className="w-64 px-4 py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Search...</span>
                  <div className="flex items-center space-x-1 opacity-60">
                    <kbd className="px-1.5 py-0.5 text-xs bg-gray-700/50 text-gray-400 rounded border border-gray-600/50">
                      ⌘
                    </kbd>
                    <kbd className="px-1.5 py-0.5 text-xs bg-gray-700/50 text-gray-400 rounded border border-gray-600/50">
                      K
                    </kbd>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 p-1.5 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group border border-transparent hover:border-gray-600/30"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow">
                    {user?.username?.charAt(0).toUpperCase() || "D"}
                  </div>

                  <div className="text-left hidden lg:block">
                    <div className="text-sm font-semibold text-gray-200">
                      {user?.username || "Developer"}
                    </div>
                  </div>

                  <span
                    className={`text-gray-500 text-xs transition-transform duration-300 ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50">
                    {/* User Info */}
                    <div className="px-3 py-2 border-b border-gray-700/50">
                      <div className="text-sm font-semibold text-gray-200">
                        {user?.username}
                      </div>
                      <div className="text-xs text-gray-500">{user?.email}</div>
                    </div>

                    {/* Quick Stats */}
                    <div className="px-3 py-2 grid grid-cols-3 gap-1 text-center border-b border-gray-700/50">
                      <div>
                        <div className="text-gray-200 font-bold text-sm">
                          12
                        </div>
                        <div className="text-xs text-gray-500">Boards</div>
                      </div>
                      <div>
                        <div className="text-gray-200 font-bold text-sm">8</div>
                        <div className="text-xs text-gray-500">Repos</div>
                      </div>
                      <div>
                        <div className="text-gray-200 font-bold text-sm">3</div>
                        <div className="text-xs text-gray-500">Teams</div>
                      </div>
                    </div>

                    {/* Menu */}
                    <div className="py-1">
                      <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 transition-colors">
                        <span>👤</span>
                        <span>Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 transition-colors">
                        <span>⚙️</span>
                        <span>Settings</span>
                      </button>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-700/50 pt-1">
                      <button
                        onClick={() => {
                          logout();
                          setIsProfileOpen(false);
                          navigate("/");
                        }}
                        className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                      >
                        <span>→</span>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/auth")}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
