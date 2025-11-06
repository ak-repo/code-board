import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock data for demonstration
  const recentBoards = [
    {
      id: 1,
      name: "Frontend Development",
      color: "blue",
      updated: "2 hours ago",
    },
    { id: 2, name: "Backend API", color: "purple", updated: "1 day ago" },
    { id: 3, name: "Mobile App Launch", color: "green", updated: "3 days ago" },
  ];

  const recentRepos = [
    { id: 1, name: "codeboard-web", language: "TypeScript", stars: 12 },
    { id: 2, name: "api-gateway", language: "Go", stars: 8 },
    { id: 3, name: "mobile-app", language: "React Native", stars: 5 },
  ];

  const quickActions = [
    { icon: "📋", label: "New Board", action: () => navigate("/boards/new") },
    { icon: "📁", label: "New Repo", action: () => navigate("/repos/new") },
    { icon: "🐛", label: "New Issue", action: () => navigate("/issues/new") },
    {
      icon: "👥",
      label: "Invite Team",
      action: () => navigate("/team/invite"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,119,198,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>

      {/* Header */}

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/30 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user?.username || "Developer"}! 👋
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to streamline your development workflow today?
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mt-6">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="flex items-center space-x-3 px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <span className="text-2xl">{action.icon}</span>
                  <span className="text-gray-300 font-medium group-hover:text-white">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Boards */}
          <section className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>📋</span>
                <span>Recent Boards</span>
              </h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentBoards.map((board) => (
                <div
                  key={board.id}
                  className="p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 bg-${board.color}-500 rounded-full`}
                      ></div>
                      <span className="text-gray-200 font-medium group-hover:text-white">
                        {board.name}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {board.updated}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Repositories */}
          <section className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>📁</span>
                <span>Recent Repositories</span>
              </h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-gray-200 font-medium group-hover:text-white mb-1">
                        {repo.name}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{repo.language}</span>
                        <span className="flex items-center space-x-1">
                          ⭐ {repo.stars}
                        </span>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-gray-600 rounded-lg text-gray-300 hover:bg-gray-500 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Activity Feed */}
        <section className="mt-8 bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <span>📊</span>
            <span>Recent Activity</span>
          </h3>

          <div className="space-y-4">
            {[
              {
                action: "created",
                type: "board",
                item: "Q4 Planning",
                time: "2 hours ago",
              },
              {
                action: "commented",
                type: "issue",
                item: "Fix auth bug",
                time: "4 hours ago",
              },
              {
                action: "merged",
                type: "PR",
                item: "feature/new-dashboard",
                time: "1 day ago",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/30"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                  {activity.type === "board"
                    ? "📋"
                    : activity.type === "issue"
                    ? "🐛"
                    : "🔄"}
                </div>
                <div className="flex-1">
                  <span className="text-gray-300">
                    You <span className="text-blue-400">{activity.action}</span>{" "}
                    <span className="text-white font-medium">
                      {activity.item}
                    </span>
                  </span>
                </div>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-700/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center space-x-6">
              <span>CodeBoard v1.0</span>
              <span>•</span>
              <span>Microservices Architecture</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="hover:text-gray-400 transition-colors">
                Documentation
              </button>
              <button className="hover:text-gray-400 transition-colors">
                Support
              </button>
              <button className="hover:text-gray-400 transition-colors">
                Status
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
