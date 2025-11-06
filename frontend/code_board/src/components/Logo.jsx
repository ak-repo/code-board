import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center space-x-3 cursor-pointer group"
      onClick={() => navigate("/")}
    >
      {/* Animated Logo Container */}
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
          <span className="text-white font-bold text-xl">CB</span>
        </div>
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        {/* Corner Accents */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
          CodeBoard
        </h1>
        <span className="text-xs text-gray-400 font-light tracking-wider group-hover:text-gray-300 transition-colors">
          DEV PLATFORM
        </span>
      </div>
    </div>
  );
}

export default Logo;
