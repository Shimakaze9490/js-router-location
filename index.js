window.onload = function () {
	const routes = [
		{
			name: "操作系统",
			path: "/operation",
			component: "<h1>操作系统</h1>"
		},
		{
			name: "计算机网络",
			path: "/network",
			component: "<h1>计算机网络</h1>"
		},
		{
			name: "软件工程",
			path: "/software",
			component: "<h1>软件工程</h1>"
		}
	];
	const outer = document.querySelector("#content");

	const links = document.querySelectorAll('a');
	links.forEach(link => {
		link.addEventListener("click", function (ev) {
			ev.preventDefault();
			const href = ev.target.getAttribute("href");
			window.location.hash = href;
		});
	});

	window.addEventListener("hashchange", function (ev) {
		const hash = window.location.hash;
		const route = routes.find(function (route) {
			return hash === "#" + route.path;
		});
		outer.innerHTML = route && route.component || "<h1>Error</h1>";
	});
}
