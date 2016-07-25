"use strict";

window.Router = window.ReactRouter.Router;
window.Route = window.ReactRouter.Route;
window.Link = window.ReactRouter.Link;
window.browserHistory = window.ReactRouter.browserHistory;
window.IndexRoute = window.ReactRouter.IndexRoute;

ReactDOM.render(React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(
    Route,
    { path: "/", component: Home },
    React.createElement(IndexRoute, { component: App }),
    React.createElement(Route, { path: "login", component: Login }),
    React.createElement(Route, { path: "signup", component: Signup }),
    React.createElement(Route, { path: "progress", component: Progress })
  )
), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxNQUFQLEdBQWdCLE9BQU8sV0FBUCxDQUFtQixNQUFuQztBQUNBLE9BQU8sS0FBUCxHQUFlLE9BQU8sV0FBUCxDQUFtQixLQUFsQztBQUNBLE9BQU8sSUFBUCxHQUFjLE9BQU8sV0FBUCxDQUFtQixJQUFqQztBQUNBLE9BQU8sY0FBUCxHQUF3QixPQUFPLFdBQVAsQ0FBbUIsY0FBM0M7QUFDQSxPQUFPLFVBQVAsR0FBb0IsT0FBTyxXQUFQLENBQW1CLFVBQXZDOztBQUdBLFNBQVMsTUFBVCxDQUNFO0FBQUMsUUFBRDtBQUFBLElBQVEsU0FBUyxjQUFqQjtBQUNFO0FBQUMsU0FBRDtBQUFBLE1BQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsSUFBM0I7QUFDRSx3QkFBQyxVQUFELElBQVksV0FBVyxHQUF2QixHQURGO0FBRUUsd0JBQUMsS0FBRCxJQUFPLE1BQUssT0FBWixFQUFvQixXQUFXLEtBQS9CLEdBRkY7QUFHRSx3QkFBQyxLQUFELElBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVcsTUFBaEMsR0FIRjtBQUlFLHdCQUFDLEtBQUQsSUFBTyxNQUFLLFVBQVosRUFBdUIsV0FBVyxRQUFsQztBQUpGO0FBREYsQ0FERixFQVNHLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQVRIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LlJvdXRlciA9IHdpbmRvdy5SZWFjdFJvdXRlci5Sb3V0ZXI7XG53aW5kb3cuUm91dGUgPSB3aW5kb3cuUmVhY3RSb3V0ZXIuUm91dGU7XG53aW5kb3cuTGluayA9IHdpbmRvdy5SZWFjdFJvdXRlci5MaW5rO1xud2luZG93LmJyb3dzZXJIaXN0b3J5ID0gd2luZG93LlJlYWN0Um91dGVyLmJyb3dzZXJIaXN0b3J5O1xud2luZG93LkluZGV4Um91dGUgPSB3aW5kb3cuUmVhY3RSb3V0ZXIuSW5kZXhSb3V0ZTtcblxuXG5SZWFjdERPTS5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtBcHB9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICA8Um91dGUgcGF0aD1cInNpZ251cFwiIGNvbXBvbmVudD17U2lnbnVwfS8+XG4gICAgICA8Um91dGUgcGF0aD1cInByb2dyZXNzXCIgY29tcG9uZW50PXtQcm9ncmVzc30vPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=